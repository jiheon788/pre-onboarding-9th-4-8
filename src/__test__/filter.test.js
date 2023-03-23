import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import queryClient from '@/lib/queryClient';
import { PARAMS_KEY, TODAY } from '@/constants/config';
import TableController from '@/components/TableController';
import AdminPage from '@/pages/AdminPage';

describe('filter Test', () => {
  // 정훈
  it('주문 상태 필터 변경 시 쿼리 스트링 변경', async () => {
    render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback="loading...">
                    <AdminPage />
                  </Suspense>
                }
              />
            </Routes>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );
    window.scrollTo = jest.fn();

    const filterBtn = await screen.findByTestId('filter-btn');
    fireEvent.click(filterBtn);

    const completeBtn = await screen.findByText('Only Complete');
    fireEvent.click(completeBtn);

    await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

    let url = new URLSearchParams(window.location.search);
    expect(url.get('filter')).toBe('complete');
  });
  // 소연
  it('필터 초기화', async () => {
    render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback="loading...">
                    <AdminPage />
                  </Suspense>
                }
              />
            </Routes>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );
    window.scrollTo = jest.fn();

    const resetButton = screen.getByTestId('reset-filter');
    fireEvent.click(resetButton);

    const url = new URLSearchParams(window.location.search);

    PARAMS_KEY.forEach((param) => {
      expect(url.get(param)).toBeNull();
    });
  });
});

//준우
describe('Admin Page Rendering', () => {
  const componentRender = () => {
    const utils = render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback="loading...">
              <TableController />
            </Suspense>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );

    return utils;
  };

  it('오늘 버튼 토글 쿼리스트링 테스트', async () => {
    componentRender();
    window.scrollTo = jest.fn();

    const switchfBtn = await screen.findByTestId('today-order');

    fireEvent.click(switchfBtn);
    let url = new URLSearchParams(window.location.search);
    expect(url.get('date')).toBe(TODAY);
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

    fireEvent.click(switchfBtn);
    url = new URLSearchParams(window.location.search);
    expect(url.has('date')).toBe(false);
  });
});
