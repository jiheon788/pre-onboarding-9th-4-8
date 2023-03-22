import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import AdminPage from '@/pages/AdminPage';
import queryClient from '@/lib/queryClient';

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
});
