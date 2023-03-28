import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '@/contexts/AuthContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <AuthProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </AuthProvider>
  </>
);

export default MyApp;
