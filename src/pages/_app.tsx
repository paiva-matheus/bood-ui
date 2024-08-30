import Global from '@/styles/global';
import type { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
      <Global />
      <ToastContainer />
    </AppCacheProvider>
  );
}
