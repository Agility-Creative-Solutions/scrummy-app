import classnames from 'classnames';
import React from 'react';

import { TypographyMap } from './bin';
import type { FontVariant, TypographyElement } from './types';

export interface TextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: FontVariant;
  element?: TypographyElement;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Typography: React.FC<TextProps> = (props: TextProps) => {
  const { variant, className = '', href, children, onClick } = props;

  const getElement = () => {
    if (href) {
      return 'a';
    }
    if (variant) {
      return TypographyMap[variant].element;
    }
    return 'span';
  };

  const getClassNames = () => {
    if (variant && variant !== 'none')
      return TypographyMap[variant]?.className?.toString().replace(/,/g, ' ');

    return '';
  };

  const TypographyElement = getElement();

  return (
    <TypographyElement
      className={classnames(getClassNames(), className)}
      onClick={onClick}
      href={href}
    >
      {children}
    </TypographyElement>
  );
};

export default Typography;
