import React from 'react';

import DocumentationPage from './pages/Documentation';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  title: string;
  url: string;
  component: () => JSX.Element;
}

export const MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    url: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    url: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    url: '/legendaries',
    component: () => <LegendariesPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    url: '/documentation',
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
