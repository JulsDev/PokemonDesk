import React, { useState } from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Pokedex.module.scss';

import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import useData, { IData } from '../../hooks/useData';
import Layout from '../../components/Layout';
import { IPokemons } from '../../interface/pokemons';

interface PokedexPageProps {
  data?: IData | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value as string);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={ps.contentWrapper}>
        <div className={cn(as.container, ps.contentPokedex)}>
          <Heading tag="h2" propsClassName={ps.contentTitle}>
            {!isLoading && data?.total} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
          <div>
            <input type="text" value={searchValue} onChange={handleSearchChange} />
          </div>
          <div className={ps.cardsWrapper}>
            {!isLoading && data?.pokemons
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
