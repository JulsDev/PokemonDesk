import React from 'react';
import { A } from 'hookrouter';

import s from './Navigation.module.scss';
import { MENU } from '../../routes';

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        {MENU.map((item) => (
          <A key={item.title} href={item.url} className={s.nav__item}>
            <li>{item.title}</li>
          </A>
        ))}
      </ul>
    </nav>
  );
}
