import React from 'react';

import InputStyled from './bin/InputStyled';

type Props = {
  type: string;
  placeholder?: string;
};

const Input = ({ type, placeholder }: Props) => {
  return <InputStyled type={type} placeholder={placeholder} />;
};

export default Input;
