import cx from 'classnames';
import React from 'react';

import Icon from '../Icon';
import Loader from '../Loader';

export type ButtonProps = {
  href?: string;
  title?: string;
  icon?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  buttonType?: 'primary' | 'pink' | 'success' | 'warning' | 'danger' | 'glass';
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  href,
  icon,
  title,
  onClick,
  isLoading,
  fullWidth,
  buttonType,
}) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <a
      className={cx(
        'btn button cursor-pointer border-none px-5 py-3 rounded-xl my-auto ease-in duration-200 h-12 inline-flex items-center active:shadow-xl hover:shadow-md',
        {
          'bg-scrummyOrange-500 text-white': buttonType === 'primary',
          'bg-scrummyPink-500 text-white': buttonType === 'pink',
          'bg-scrummyGreen-500 text-white': buttonType === 'success',
          'bg-scrummyYellow-500 text-white': buttonType === 'warning',
          'bg-scrummyRed-500 text-white': buttonType === 'danger',
          'bg-gray-500 text-white opacity-30 cursor-not-allowed': disabled,
          'bg-transparent text-black active:shadow-lg': buttonType === 'glass',
          'w-full': fullWidth,
          'w-fit': !fullWidth,
        }
      )}
      onClick={handleButtonClick}
      href={href}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mx-auto flex w-full items-center justify-center gap-5 text-center">
            {icon && (
              <span className=" text-xl">{<Icon iconName={icon} />}</span>
            )}
            {title && (
              <span className=" justify-center text-center text-base">
                {title}
              </span>
            )}
          </div>
        </>
      )}
    </a>
  );
};

export default Button;
