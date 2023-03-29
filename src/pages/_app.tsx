import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '@/contexts/AuthContext';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: any) => (
  <>
    <SessionProvider session={session}>
      <AuthProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  </>
);

export default MyApp;
