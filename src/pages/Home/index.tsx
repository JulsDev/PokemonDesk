import React from 'react';
import cn from 'classnames';

import Button, { ButtonSize } from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import as from '../../App.module.scss';
import hs from './Home.module.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={hs.content__wrapper}>
        <div className={cn(as.container, hs.content__home)}>
          <div className={hs.content__text}>
            <Heading tag="h1" propsClassName={hs.content__title}>
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </Heading>
            <Heading tag="h2" propsClassName={hs.content__subtitle}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </Heading>
            <Button onClick={() => console.log('Click button')} type="button" color="green" size={ButtonSize.medium}>
              See pokemons
            </Button>
          </div>
          <div className={hs.content__parallax}>
            <Parallax />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
