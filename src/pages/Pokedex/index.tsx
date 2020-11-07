import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={ps.content__wrapper}>
      <div className={cn(as.container, ps.content__pokedex)}>
        <strong>Find</strong> all your favorite <strong>Pokemon</strong>
      </div>
    </div>
  );
};

export default PokedexPage;
