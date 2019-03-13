import setPokemons from '@/mutations';

describe('Set Pokemons', () => {
  it('should set the pokemons into the store', () => {
    const state = { pokemons: [] };
    const pokemons = [{
      name: 'Pikachu',
    }, {
      name: 'Bulbasaur',
    }];

    setPokemons(state, pokemons);

    expect(state.pokemons).toEqual(pokemons);
  });
});
