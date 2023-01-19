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
  iconSize?: 'xs' | 'sm' | 'm' | 'l' | 'xl';
  errorMessage?: string;
  errorIcon?: boolean;
};

const Input: React.FC<InputProps> = ({
  iconSize,
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
    <div className="my-7">
      <div
        className={cx(
          'relative h-14 flex rounded-lg border-[1px] bg-dark-100 pl-5',
          {
            'border-gray-600': errorIcon === false,
            'border-scrummyRed-500': errorIcon === true,
          }
        )}
      >
        {icon && (
          <span className="absolute left-0 top-0 flex h-full items-center justify-center p-4">
            {
              <Icon
                iconName={icon}
                className="text-lg text-gray-500"
                color="#f1f5f9"
                size={cx({
                  '16': iconSize === 'xs',
                  '18': iconSize === 'sm',
                  '22': iconSize === 'm',
                  '24': iconSize === 'l',
                  '28': iconSize === 'xl',
                })}
              />
            }
          </span>
        )}
        <input
          className={cx(
            'autofill:bg-transparent align-middle  w-full rounded-lg bg-dark-100 text-gray-100 focus:outline-none placeholder:text-gray-500',
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
        {errorIcon && (
          <span className="m-auto px-2">
            {<Icon iconName="MdError" className=" text-red-500" />}
          </span>
        )}

        {floatingPlaceholder && <span>{placeholder}</span>}
      </div>
      {errorIcon && (
        <div>
          <span className={cx('text-sm  text-red-500')}>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
