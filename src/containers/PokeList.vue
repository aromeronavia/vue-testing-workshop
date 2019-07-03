<template>
  <div class="container flex flex-row flex-wrap">
    <template v-for="pokemon in pokemons">
      <pokemon-card
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PokemonCard from '@/components/PokemonCard.vue';
import store from '@/store';

export default {
  name: 'PokeList',
  components: {
    PokemonCard,
  },
  store,
  computed: {
    ...mapState({ pokemons: (state) => state.pokemons })
  },
  methods: {
    ...mapActions(['getPokemons'])
  },
  mounted: function () {
    return this.getPokemons()
  },
};
</script>

<style>
.pokelist {
  display: flex;
  flex-direction: row;
}
</style>
