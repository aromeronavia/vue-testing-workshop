import Vue from 'vue';
import Vuex from 'vuex';
import getPokemons from '@/actions';
import setPokemons from '@/mutations'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    SET_POKEMONS: setPokemons,
  },
  actions: { getPokemons },
});
