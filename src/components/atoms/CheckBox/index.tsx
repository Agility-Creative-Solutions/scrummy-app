import cx from 'classnames';
import type { ChangeEventHandler } from 'react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

export type CheckBoxProps = {
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  label?: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  onChange,
  value,
  checked,
  label,
}) => {
  return (
    <div className="flex flex-col justify-items-start">
      <label htmlFor={id} className="relative">
        <input
          className="check-box-1 h-5 w-5 cursor-pointer appearance-none rounded border-2  border-scrummyOrange-500  checked:bg-scrummyOrange-500"
          type="checkbox"
          checked={checked}
          id={id}
          onChange={onChange}
          value={value}
        />
        <FaCheck
          className={cx(
            'absolute left-1 top-1 h-3 w-3 cursor-pointer text-white transition',
            checked ? 'text-opacity-100' : 'text-opacity-0'
          )}
        />
        {label && (
          <span className="absolute bottom-1 left-5 pl-2">{label}</span>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
