import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// внутри React.FC уже прописаны основные пропсы,
// которые могут быть у функц. компонента
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
