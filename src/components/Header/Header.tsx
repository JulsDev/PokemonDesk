import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import c from '../../App.module.scss';

import Navigation from '../Navigation/Navigation';

import logoSrc from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={s.header__wrapper}>
      <div className={cn(c.container, s.header__content)}>
        <a href="./" className={s.logo__wrap}>
          <img src={logoSrc} className={s.logo} alt="Pokemon logo" />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
