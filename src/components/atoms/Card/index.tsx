import type { ReactNode } from 'react';
import React from 'react';

import StyledCard from './StyledCard';

export type CardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, subtitle, children }) => {
  return (
    <StyledCard>
      {(!!title || !!subtitle) && (
        <div className="pb-5">
          {title && <h4>{title}</h4>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
    </StyledCard>
  );
};

export default Card;
