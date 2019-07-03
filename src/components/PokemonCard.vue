<template>
  <div
    class="flex flex-col mx-6 bg-blue rounded-lg py-4 px-8 w-32 h-32 my-6 cursor-pointer"
    tid="pokemon-card"
  >
    <img class="w-16 h-16 rounded" :src="pokemon.url"/>
    <p class="text-lg text-center">{{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: ['pokemon'],
};
</script>
