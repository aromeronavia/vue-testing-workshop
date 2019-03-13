<template>
  <div class="pokemon-card">
    {{ pokemon.name }}
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: ['pokemon'],
};
</script>

<style>
  .pokelist {
    display: flex;
    flex-direction: row;
  }
</style>
