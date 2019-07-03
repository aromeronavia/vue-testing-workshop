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
    url: 'https://photo.ai/1',
  }, {
    name: 'Bulbasaur',
    url: 'https://photo.ai/2',
  }, {
    name: 'Mew',
    url: 'https://photo.ai/3',
  }, {
    name: 'Mewtwo',
    url: 'https://photo.ai/4',
  }],
};

describe('PokeList', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('should render a list of pokemons', async () => {
    mock.onGet('http://localhost:3000/pokemons').reply(200, mockData);

    const wrapper = mount(PokeList, {
      store,
      localVue,
    });

    await flushPromises();
    const pokemonCards = wrapper.findAll('[tid="pokemon-card"]');
    expect(pokemonCards.length).toEqual(4);
  });
});
