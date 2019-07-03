import axios from 'axios';
import _ from 'lodash';

const buildPokemon = async pokemon => ({
  name: pokemon.name,
  url: _.get(await axios.get(pokemon.url), 'data.sprites.back_default', ''),
});

const getPokemons = async ({ commit }) => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');

  const pokemons = await Promise.all(
    data.results.map(pokemon => buildPokemon(pokemon)),
  );

  commit('SET_POKEMONS', pokemons);
};

export default getPokemons;
