<template>
  <div class="main">
    <PokeList> </PokeList>
  </div>
</template>

<script>
import PokeList from '@/containers/PokeList.vue';
import '@/assets/css/tailwind.css'

export default {
  name: 'HelloWorld',
  components: { PokeList },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
