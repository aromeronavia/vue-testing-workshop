import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';
import PokeList from '@/containers/PokeList.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockData = {
  results: [{
    name: 'Pikachu',
  }, {
    name: 'Bulbasaur',
  }, {
    name: 'Mew',
  }, {
    name: 'Mewtwo',
  }],
};

describe.skip('PokeList', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('should render a list of pokemons', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon').reply(200, mockData);

    const wrapper = mount(PokeList, {
      store,
      localVue,
    });

    await flushPromises();
    const pokemonCards = wrapper.findAll('.pokemon-card');
    expect(pokemonCards.length).toEqual(4);
  });

  it('should display an empty state for the cards', () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon').reply(200, []);

    const wrapper = mount(PokeList, {

    });
  });
});
