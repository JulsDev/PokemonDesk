import React from 'react';

import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        <a href="./" className={s.nav__item}>
          <li>Home</li>
        </a>
        <a href="./" className={s.nav__item}>
          <li>Pokédex</li>
        </a>
        <a href="./" className={s.nav__item}>
          <li>Legendaries</li>
        </a>
        <a href="./" className={s.nav__item}>
          <li>Documentation</li>
        </a>
      </ul>
    </nav>
  );
}
