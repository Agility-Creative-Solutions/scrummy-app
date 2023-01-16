import cx from 'classnames';
import React from 'react';

import Icon from '../Icon';

export type InputProps = {
  icon?: string;
  type: string;
  onChange: (e: any) => void;
  placeholder?: string;
  floatingPlaceholder?: boolean;
  label?: string;
  required?: boolean;
  name?: string;
  value?: string;
  errorMessage?: string;
  errorIcon?: boolean;
};

const Input: React.FC<InputProps> = ({
  icon,
  type,
  onChange,
  placeholder,
  floatingPlaceholder,
  required,
  name,
  value,
  errorMessage,
  errorIcon = false,
}) => {
  return (
    <div
      className={cx(
        'relative m-0 my-7 h-[50px] rounded-lg border-[1px] bg-dark-100 px-5 pb-5',
        {
          'border-gray-600': errorIcon === false,
          'border-scrummyRed-500': errorIcon === true,
          'mb-10': errorIcon,
        }
      )}
    >
      {icon && (
        <span className="absolute left-[-6px] top-0 flex h-full items-center justify-center p-5">
          {
            <Icon
              iconName={icon}
              className="text-lg text-gray-500"
              color="#f1f5f9"
            />
          }
        </span>
      )}
      <input
        className={cx(
          'autofill:bg-transparent align-middle h-[46px] w-full rounded-lg bg-dark-100 text-gray-100 focus:outline-none placeholder:text-gray-500',
          {
            'pl-8': icon,
            'pr-4': errorIcon,
          }
        )}
        name={name}
        type={type}
        placeholder={placeholder && !floatingPlaceholder ? placeholder : ''}
        onChange={onChange}
        value={value}
        required={required}
      />
      {floatingPlaceholder && <span>{placeholder}</span>}
      {errorIcon && (
        <div>
          <span className="mt-[-30px] mr-[-14px] flex justify-end">
            {<Icon iconName="MdError" className=" text-red-500" />}
          </span>
          <span className=" flex justify-start pt-[24px] align-middle  text-sm text-red-500">
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
