import React from 'react';
import cn from 'classnames';

import Parallax from '../../components/Parallax';

import as from '../../App.module.scss';
import hs from './Home.module.scss';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={hs.content__wrapper}>
      <div className={cn(as.container, hs.content__home)}>
        <div className={hs.content__text}>
          <h1 className={hs.content__title}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </h1>
          <h2 className={hs.content__subtitle}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </h2>
          <Button onClick={() => console.log('Click button')}>See pokemons</Button>
        </div>
        <div className={hs.content__parallax}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
