import axios from 'axios';

const getPokemons = async ({ commit }) => {
  const { data } = await axios.get('http://localhost:3000/pokemons');

  commit('SET_POKEMONS', data.results);
};

export default getPokemons;
