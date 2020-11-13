import React from 'react';
import { navigate } from 'hookrouter';
import cn from 'classnames';

import Button, { ButtonSize } from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

import as from '../../App.module.scss';
import hs from './Home.module.scss';

import { LinkEnum } from '../../routes';

const HomePage: React.FC = () => {
  return (
    <div className={hs.content__wrapper}>
      <Layout className={cn(as.container)}>
        <div className={hs.content__home}>
          <div className={hs.content__text}>
            <Heading tag="h1" propsClassName={hs.content__title}>
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </Heading>
            <Heading tag="h2" propsClassName={hs.content__subtitle}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </Heading>
            <Button onClick={() => navigate(LinkEnum.POKEDEX)} type="button" color="green" size={ButtonSize.medium}>
              See pokemons
            </Button>
          </div>
          <div className={hs.content__parallax}>
            <Parallax />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
