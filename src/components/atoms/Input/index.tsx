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
  errorPadding?: 'small' | 'normal' | 'large';
};

const Input: React.FC<InputProps> = ({
  errorPadding,
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
          'mb-8': errorIcon && errorPadding === 'small',
          'mb-14': errorIcon && errorPadding === 'normal',
          'mb-20': errorIcon && errorPadding === 'large',
        }
      )}
    >
      {icon && (
        <span className="absolute left-1.5 top-0 flex h-full items-center justify-center p-5">
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
          'autofill:bg-transparent align-middle h-11 w-full rounded-lg bg-dark-100 text-gray-100 focus:outline-none placeholder:text-gray-500',
          {
            'pl-8': icon,
            'pr-5': errorIcon,
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
          <span className="mt-[-29px] mr-[-14px] flex justify-end">
            {<Icon iconName="MdError" className=" text-red-500" />}
          </span>
          <span
            className={cx(
              ' flex justify-start align-middle  text-sm text-red-500 pt-6',
              {
                'pt-5': errorPadding === 'small',
                'pt-6': errorPadding === 'normal' || errorPadding === 'large',
              }
            )}
          >
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
