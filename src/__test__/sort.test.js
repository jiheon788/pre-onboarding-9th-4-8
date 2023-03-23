import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import AdminPage from '@/pages/AdminPage';
import { theme } from '@/lib/styles/theme';
import queryClient from '@/lib/queryClient';
import OrderTableArea from '@/components/OrderTableArea';

// 호수
it('Order Id 정렬 버튼 테스트', async () => {
  render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback="loading...">
                  <OrderTableArea />
                </Suspense>
              }
            />
          </Routes>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>,
  );
  const sortButton = await screen.findByTestId('sort-by-id');
  window.scrollTo = jest.fn();
  fireEvent.click(sortButton);
  let url = new URLSearchParams(window.location.search);
  expect(url.get('sort')).toBe('id-descending');
  fireEvent.click(sortButton);
  await waitForElementToBeRemoved(() => screen.queryByText('loading...'));
  url = new URLSearchParams(window.location.search);
  expect(url.get('sort')).toBe('id-ascending');
});
// 호수
it('<OrderTableArea /> 기본 정렬은 오름차순', async () => {
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
  const idList = (await screen.findAllByTestId('id')).map(
    (item) => item.textContent,
  );
  const ascendingIdList = [...idList].sort((a, b) => Number(a) - Number(b));
  expect(idList).toEqual(ascendingIdList);
});
// 호수
it('Order Time 정렬 버튼 테스트', async () => {
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
  const sortButton = await screen.findByTestId('sort-by-time');
  window.scrollTo = jest.fn();
  fireEvent.click(sortButton);
  let url = new URLSearchParams(window.location.search);
  expect(url.get('sort')).toBe('time-descending');
  fireEvent.click(sortButton);
  await waitForElementToBeRemoved(() => screen.queryByText('loading...'));
  url = new URLSearchParams(window.location.search);
  expect(url.get('sort')).toBe('time-ascending');
});
