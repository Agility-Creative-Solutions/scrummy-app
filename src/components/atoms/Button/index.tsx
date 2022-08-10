import cx from 'classnames';
import React from 'react';

import useMdIcons from '@/hooks/useMdIcons';

export type ButtonProps = {
  href?: string;
  title?: string;
  icon?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
};

const Button: React.FC<ButtonProps> = ({
  href,
  icon,
  title,
  onClick,
  isLoading,
  fullWidth,
  buttonType,
}) => {
  const { Icon } = useMdIcons(icon ?? 'MdInput');

  return (
    <a
      className={cx(
        'btn button inline-block cursor-pointer border-none px-5 py-2 rounded-full my-auto',
        {
          'bg-scrummyOrange text-white': buttonType === 'primary',
          'bg-scrummyPink text-white': buttonType === 'secondary',
          'bg-scrummyGreen text-white': buttonType === 'tertiary',
          'w-full': fullWidth,
        }
      )}
      onClick={onClick}
      href={href}
    >
      {isLoading && (
        <div className="btn__loader">
          <div className="btn__loader__spinner"></div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex items-center justify-center gap-5 text-center">
            {icon && <span className="text-xl">{<Icon />}</span>}
            {title && <span className="text-base">{title}</span>}
          </div>
        </>
      )}
    </a>
  );
};

export default Button;
