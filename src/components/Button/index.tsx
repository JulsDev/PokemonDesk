import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'reset' | 'submit';
  color?: 'green' | 'yellow';
  size?: ButtonSize;
  fluid?: boolean;
}

// внутри React.FC уже прописаны основные пропсы,
// которые могут быть у функц. компонента
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  color = 'green',
  size = ButtonSize.small,
  fluid,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(s.root, s[color], s[size], fluid && s.fluid)}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
