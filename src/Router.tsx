import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from '@/components/Layout';
import ErrorFallback from '@/components/ErrorFallback';
import LoadingFallback from './components/LoadingFallback';

const AdminPage = lazy(() => import('@/pages/AdminPage'));

const Router = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/admin/order"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ error, resetErrorBoundary }) => (
                  <ErrorFallback
                    error={error}
                    resetErrorBoundary={resetErrorBoundary}
                  />
                )}
              >
                <AdminPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={<Navigate to="/admin/order" replace={true} />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
