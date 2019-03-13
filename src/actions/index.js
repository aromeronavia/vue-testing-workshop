import axios from 'axios';

const getPokemons = ({ commit }) => (
  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(({ data }) => {
      commit('SET_POKEMONS', data.results);
    })
);

export default getPokemons;
