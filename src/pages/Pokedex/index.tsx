import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Pokedex.module.scss';

import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import useData, { IData } from '../../hooks/useData';
import Layout from '../../components/Layout';

interface PokedexPageProps {
  data?: IData | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={ps.contentWrapper}>
        <div className={cn(as.container, ps.contentPokedex)}>
          <Heading tag="h2" propsClassName={ps.contentTitle}>
            {data?.total} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
          <div className={ps.cardsWrapper}>
            {data?.pokemons
              ? data?.pokemons.map((item, index) => {
                  return (
                    <div key={`pokemon${index + 1}`}>
                      <PokemonCard pokemon={item} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default PokedexPage;
