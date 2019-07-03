<template>
  <button
    :class="{
      'btn-primary': type === 'primary',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ReverButton',
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'warning', 'danger'].indexOf(value) !== -1;
      },
      required: false,
      default: 'primary',
    },
  },
};
</script>

<style>
  .btn-primary {
    background-color: blue;
  }

  .btn-warning {
    background-color: yellow;
  }

  .btn-danger {
    background-color: red;
  }
</style>
