import React from 'react';

export type RadioButtonProps = {
  id?: string;
  value?: string;
  onChange?: (e: any) => void;
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
  label,
}) => {
  return (
    <div className="flex w-fit flex-col justify-items-start">
      <label htmlFor={id} className="relative cursor-pointer">
        <input
          name={name}
          type="radio"
          id={id}
          onChange={onChange}
          value={value}
          checked={checked}
          className="h-[22px] w-[22px] cursor-pointer appearance-none rounded-full border-2  border-scrummyOrange-500 checked:bg-scrummyOrange-500"
        />
        <span className="absolute left-[8px] top-[8px] h-[6px] w-[6px] cursor-pointer rounded-full bg-[#e3e3e3]"></span>
        {label && (
          <span className=" absolute bottom-[5px] left-5 pl-2">{label}</span>
        )}
      </label>
    </div>
  );
};

export default RadioButton;
