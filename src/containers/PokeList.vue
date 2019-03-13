<template>
  <div class="pokelist">
    <template v-for="pokemon in pokemons">
      <pokemon-card :key="pokemon.name" :pokemon="pokemon">
      </pokemon-card>
    </template>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
import store from '@/store';

export default {
  name: 'PokeList',
  components: {
    PokemonCard,
  },
  store,
  computed: {
    pokemons: function () {
      return this.$store.state.pokemons;
    },
  },
  mounted: function () {
    return this.$store.dispatch('getPokemons');
  },
};
</script>

<style>
  .pokelist {
    display: flex;
    flex-direction: row;
  }
</style>
