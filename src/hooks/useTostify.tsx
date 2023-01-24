import 'react-toastify/dist/ReactToastify.css';

import type { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';

export type TostifyType = 'success' | 'error' | 'info' | 'warning';

export interface ITostifyProps {
  type?: TostifyType;
  label: string;
  options?: ToastOptions;
}

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const TOAST_CLASSNAME = {
  success: '!bg-scrummyGreen-500 !text-white',
  error: '!bg-scrummyRed-500 !text-white',
  info: '!bg-scrummyBlue-500 !text-white',
  warning: '!bg-scrummyOrange-500 !text-white',
};

export const UseTostify = ({ type = 'info', label, options }: ITostifyProps) =>
  toast[type](label, {
    ...defaultOptions,
    ...options,
    className: [TOAST_CLASSNAME[type], options?.className].join(' '),
  });

// useTostify({
//   type: 'success',
//   label: 'Hello World',
//   options: {
//     position: 'top-left',
//     autoClose: 5000,
//    }
// })

// useTostify({
//   type: 'success',
//   label: 'Hello World',
//   options: {
//     className: 'bg-scrummyOrange-500',
//    }
// })
