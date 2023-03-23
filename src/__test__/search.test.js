import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from '@/lib/styles/theme';
import queryClient from '@/lib/queryClient';
import TableController from '@/components/TableController';

// 정훈
it('검색된 유저 클릭 시 쿼리 스트링 변경', async () => {
  render(
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback="loading...">
                  <TableController />
                </Suspense>
              }
            />
          </Routes>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>,
  );

  window.scrollTo = jest.fn();

  const searchBtn = await screen.findByTestId('search-btn');
  fireEvent.click(searchBtn);

  const searchInput = await screen.findByTestId('search-input');
  fireEvent.click(searchInput);
  fireEvent.change(searchInput, { target: { value: 'annb' } });
  const searchResult = await screen.findByText('Ann Barron');
  fireEvent.click(searchResult);

  await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

  let url = new URLSearchParams(window.location.search);
  expect(url.get('customer')).toBe('Ann Barron');
});
