import React from 'react';
import type { IconType } from 'react-icons';
import * as md from 'react-icons/md';

export type IconProps = {
  iconName: string;
  className?: string;
  size?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
  const IconComponent: IconType = md[iconName as keyof typeof md];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
