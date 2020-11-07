import React from 'react';
import { Link } from 'react-router-dom';

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
    url: '/pokedex',
  },
  {
    id: 3,
    name: 'Legendaries',
    url: '/legendaries',
  },
  {
    id: 4,
    name: 'Documentation',
    url: '/documentation',
  },
];

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        {menu.map((item) => (
          <Link key={item.id} to={item.url} className={s.nav__item}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
