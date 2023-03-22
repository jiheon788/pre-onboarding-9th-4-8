import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import queryClient from '@/lib/queryClient';
import { theme } from '@/lib/styles/theme';
import Router from './Router';
import { IS_MOCK } from './constants/config';

if (process.env.NODE_ENV === 'test') {
  (async () => {
    const { server } = await import('@/mocks/server');
    server.listen();
  })();
} else if (IS_MOCK) {
  (async () => {
    const { worker } = await import('@/mocks/browser');
    worker.start();
  })();
}

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
