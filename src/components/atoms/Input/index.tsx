import React from 'react';

import useMdIcons from '@/hooks/useMdIcons';

export type InputProps = {
  icon: string;
  type: string;
  onChange: () => void;
  placeholder: string;
  floatingPlaceholder: boolean;
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
  const { Icon } = useMdIcons(icon);

  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-0 flex h-full items-center justify-center">
          {<Icon />}
        </span>
      )}
      <input
        className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 focus:outline-none"
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
