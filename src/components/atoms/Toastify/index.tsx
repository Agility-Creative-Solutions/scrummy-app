import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import type { ToastPosition } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';

export type ToastifyProps = {
  position?: ToastPosition;
  theme: 'light' | 'dark' | 'colored';
  autoClose?: number;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  label?: string;
  onClick?: void;
  button?: void;
  buttonLabel?: string;
  rtl?: boolean;
};

const Toastify: React.FC<ToastifyProps> = ({
  position,
  hideProgressBar,
  newestOnTop,
  autoClose,
  theme,
  label,
  rtl,
  buttonLabel,
}) => {
  const notify: any = () => {
    toast(label);
  };

  return (
    <div>
      <button onClick={notify()}>{buttonLabel}</button>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        rtl={rtl}
        theme={theme}
      ></ToastContainer>
    </div>
  );
};

export default Toastify;
