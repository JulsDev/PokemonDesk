import { IPokemon } from '../components/PokemonCard';

export interface IPokemons {
  total: number;
  count?: number;
  limit?: string;
  offset?: number;
  pokemons?: IPokemon[] | undefined;
}
