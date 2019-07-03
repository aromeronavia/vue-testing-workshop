import axios from 'axios';
import sinon from 'sinon';
import flushPromises from 'flush-promises';
import MockAdapter from 'axios-mock-adapter';
import getPokemons from '@/actions';

describe('Get Pokemons', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet('https://pokeapi.co/api/v2/pokemon')
      .reply(200, {
        results: [{
          name: 'Pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/1',
        }, {
          name: 'Bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2',
        }, {
          name: 'Mew',
          url: 'https://pokeapi.co/api/v2/pokemon/3',
        }, {
          name: 'Mewtwo',
          url: 'https://pokeapi.co/api/v2/pokemon/4',
        }],
      });

    mock.onGet('https://pokeapi.co/api/v2/pokemon/1')
      .reply({
        sprites: {
          back_default: 'https://photo.ai/1',
        },
      });
  });

  it('should fetch pokemons', async () => {
    const commit = sinon.spy();
    const state = {};

    getPokemons({ commit, state });

    await flushPromises();

    expect(commit.args).toEqual([
      [
        'SET_POKEMONS', [
          { name: 'Pikachu' },
          { name: 'Bulbasaur' },
          { name: 'Mew' },
          { name: 'Mewtwo' },
        ],
      ],
    ]);
  });
});
