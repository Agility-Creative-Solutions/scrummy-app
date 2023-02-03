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
  theme: 'dark',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const TOAST_CLASSNAME = {
  success: '!bg-dark-100 !text-light-100',
  error: '!bg-dark-100 !text-light-100',
  info: '!bg-dark-100 !text-light-100',
  warning: '!bg-dark-100 !text-light-100',
};

export const UseTostify = ({ type = 'info', label, options }: ITostifyProps) =>
  toast[type](label, {
    ...defaultOptions,
    ...options,
    className: [TOAST_CLASSNAME[type], options?.className].join(' '),
  });
