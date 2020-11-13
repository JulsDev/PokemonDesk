import React from 'react';

import DocumentationPage from './pages/Documentation';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  url: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    url: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    url: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    url: LinkEnum.LEGENDARIES,
    component: () => <LegendariesPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    url: LinkEnum.DOCUMENTATION,
    component: () => <DocumentationPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.url] = item.component;
  return acc;
}, {});

export default routes;
