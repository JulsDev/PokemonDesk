import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

const PokedexPage: React.FC = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=9')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Header />
      <div className={ps.contentWrapper}>
        <div className={cn(as.container, ps.contentPokedex)}>
          <Heading tag="h2" propsClassName={ps.contentTitle}>
            {totalPokemons} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
          <div className={ps.cardsWrapper}>
            {pokemons.map((item, index) => {
              return (
                <div key={`pokemon${index + 1}`}>
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
