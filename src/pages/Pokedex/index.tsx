import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import pokemons from '../../assets/pokemonInfo';

interface PokedexProps {
  title?: string;
}

const PokedexPage: React.FC<PokedexProps> = () => {
  return (
    <>
      <Header />
      <div className={ps.contentWrapper}>
        <div className={cn(as.container, ps.contentPokedex)}>
          <Heading tag="h2" propsClassName={ps.contentTitle}>
            800 <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
          <div className={ps.cardsWrapper}>
            {pokemons.map((item) => {
              return (
                <div key={item.id}>
                  <PokemonCard pokemon={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PokedexPage;
