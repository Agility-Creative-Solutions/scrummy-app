import React from 'react';
import { FaCheck } from 'react-icons/fa';

export type CheckBoxProps = {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
  checked?: boolean;
  for?: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  name,
  onChange,
  value,
  checked,
}) => {
  return (
    <div className="flex h-5 w-5 flex-col items-center justify-center p-3">
      <label htmlFor={id} className="relative h-3 w-3 cursor-pointer">
        <input
          className="check-box-1 h-5 w-5 appearance-none rounded border-2  border-scrummyOrange-500  checked:bg-scrummyOrange-500"
          type="checkbox"
          checked={checked}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        />
        <FaCheck className="check-1 absolute left-1 top-1 h-3 w-3 text-white text-opacity-0 transition" />
      </label>
    </div>
  );
};

export default CheckBox;
