import React, { PropsWithChildren } from 'react';

import DocumentationPage from './pages/Documentation';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries';
import PokedexPage from './pages/Pokedex';
import Pokemon, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  title: string;
  url: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
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

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    url: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];
interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.url] = item.component;
  return acc;
}, {});

export default routes;
