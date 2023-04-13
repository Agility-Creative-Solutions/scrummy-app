import React from 'react';

export type MedalsProps = {
  medal: string;
  children?: any;
};

const MedalsIcons: React.FC<MedalsProps> = ({ medal, children }) => {
  return (
    <>
      <img
        src={`assets/icons/medals/${medal}.png`}
        alt="Medal-image"
        width="22px"
        height="10px"
      ></img>
      {children}
    </>
  );
};

export default MedalsIcons;
