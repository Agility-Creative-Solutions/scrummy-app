import React from 'react';

export type RadioButtonProps = {
  id?: string;
  value?: string;
  onChange?: () => void;
  checked?: boolean;
  label?: string;
  name?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  onChange,
  value,
  checked,
  name,
}) => {
  return (
    <div className="m-1 h-[22px] w-[22px] rounded-full">
      <label htmlFor={id} className="relative h-2 w-2 cursor-pointer">
        <input
          name={name}
          type="radio"
          id={id}
          onChange={onChange}
          value={value}
          checked={checked}
          className="h-[22px] w-[22px] appearance-none rounded-full border-2 border-scrummyOrange-500 checked:bg-scrummyOrange-500"
        />
        <span className="absolute left-[8px] top-[4px] h-[6px] w-[6px] rounded-full bg-[#e3e3e3]"></span>
      </label>
    </div>
  );
};

export default RadioButton;
