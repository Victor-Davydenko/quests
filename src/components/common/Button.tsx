import React, { FC } from 'react';

interface IButton {
  children: string
  className: string
  disabled: boolean
  type: 'submit' | 'button'
  onClick?: () => void
}
const Button: FC<IButton> = ({ children, type, ...attrs }) => {
  return (
    <button type={type} {...attrs}>{children}</button>
  );
};

export default Button;
