import axios from 'axios';
import sinon from 'sinon';
import flushPromises from 'flush-promises';
import MockAdapter from 'axios-mock-adapter';
import getPokemons from '@/actions';

describe('Get Pokemons', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet('http://localhost:3000/pokemons')
      .reply(200, {
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
          { name: 'Pikachu', url: 'https://photo.ai/1' },
          { name: 'Bulbasaur', url: 'https://photo.ai/2' },
          { name: 'Mew', url: 'https://photo.ai/3' },
          { name: 'Mewtwo', url: 'https://photo.ai/4' },
        ],
      ],
    ]);
  });
});
