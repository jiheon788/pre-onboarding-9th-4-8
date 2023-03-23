import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import AdminPage from '@/pages/AdminPage';
import { theme } from '@/lib/styles/theme';
import queryClient from '@/lib/queryClient';
import { isElementTD } from './utils';

describe('<OrderTableArea />', () => {
  it('주문에 대한 모든 정보는 표 형태', async () => {
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

    const statusList = await screen.findAllByTestId('status');
    const idList = await screen.findAllByTestId('id');
    const customerNameList = await screen.findAllByTestId('customer-name');
    const TimeList = await screen.findAllByTestId('transaction-time');
    const currencyList = await screen.findAllByTestId('currency');

    expect(isElementTD(statusList)).toBeTruthy();
    expect(isElementTD(idList)).toBeTruthy();
    expect(isElementTD(customerNameList)).toBeTruthy();
    expect(isElementTD(TimeList)).toBeTruthy();
    expect(isElementTD(currencyList)).toBeTruthy();
  });

  // 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
  it('show less than or equal to 50 list', async () => {
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

    const trTags = await screen.findAllByTestId('order-tr');
    expect(trTags.length).toBeLessThanOrEqual(50);
  });
});
