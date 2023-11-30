import './styles/index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import QueryProvider from '@contexts/QueryProvider';
import router from './route/router';
import { AuthProvider } from './contexts/AuthContext';

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // eslint-disable-next-line consistent-return
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </AuthProvider>
  );
});
