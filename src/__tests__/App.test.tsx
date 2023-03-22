import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import AdminPage from '@/pages/AdminPage';
import queryClient from '@/lib/queryClient';
import SortButton from '@/components/SortButton';

describe('Admin Page Rendering', () => {
  it('페이지 정상 렌더링 테스트', async () => {
    render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<AdminPage />} />
            </Routes>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );

    await screen.findByText('Overview');
    await screen.findByText('Order Table');
  });

  it('Sort 버튼 토글 쿼리스트링 테스트', async () => {
    render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<SortButton sortTarget="time" />} />
            </Routes>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>,
    );

    window.scrollTo = jest.fn();

    const timeSortButton = screen.getByTestId('time-sort');

    userEvent.click(timeSortButton);
    let url = new URLSearchParams(window.location.search);
    expect(url.get('sort')).toBe('time-descending');

    userEvent.click(timeSortButton);
    url = new URLSearchParams(window.location.search);
    expect(url.get('sort')).toBe('time-ascending');
  });
});
