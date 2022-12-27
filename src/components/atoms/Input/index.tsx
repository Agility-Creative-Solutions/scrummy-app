import cx from 'classnames';
import React from 'react';

import useMdIcons from '@/hooks/useMdIcons';

export type InputProps = {
  icon?: string;
  type: string;
  onChange: () => void;
  placeholder?: string;
  floatingPlaceholder?: boolean;
  label?: string;
  required?: boolean;
  name?: string;
  value?: string;
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
}) => {
  const { Icon } = useMdIcons(icon ?? 'MdEmail');

  return (
    <div className="relative m-0 my-5 h-[50px] rounded-lg bg-dark-100 px-5">
      {icon && (
        <span className="absolute left-0 top-0 flex h-full items-center justify-center pl-5">
          {<Icon className="text-lg text-gray-500" color="#f1f5f9" />}
        </span>
      )}
      <input
        className={cx(
          'w-full rounded-lg bg-dark-100 text-gray-100 focus:outline-none h-[50px] pb-[4px] placeholder:text-gray-500',
          {
            'pl-8': icon,
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
    </div>
  );
};

export default Input;
