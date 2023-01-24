import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ToastContainer />
    <Component {...pageProps} />
  </>
);

export default MyApp;
