import React from 'react';

import s from './Navigation.module.scss';

const menu = [
  {
    id: 1,
    name: 'Home',
    url: './',
  },
  {
    id: 2,
    name: 'Pokédex',
    url: './',
  },
  {
    id: 3,
    name: 'Legendaries',
    url: './',
  },
  {
    id: 4,
    name: 'Documentation',
    url: './',
  },
];

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        {menu.map((item) => (
          <a key={item.id} href={item.url} className={s.nav__item}>
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
