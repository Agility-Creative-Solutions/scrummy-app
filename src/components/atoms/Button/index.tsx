import cx from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export type ButtonProps = {
  href?: string;
  title?: string;
  icon?: ReactNode;
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
  return (
    <a
      className={cx('btn button inline-block', {
        'btn--primary': buttonType === 'primary',
        'btn--secondary': buttonType === 'secondary',
        'btn--tertiary': buttonType === 'tertiary',
        'w-full': fullWidth,
      })}
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
          {icon && !title && <span>{icon}</span>}
          {title && !icon && <span>{title}</span>}
          {title && icon && (
            <div className="flex gap-5">
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          )}
        </>
      )}
    </a>
  );
};

export default Button;
