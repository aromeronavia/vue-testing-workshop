<template>
  <button
    :class="{
      'btn-primary': type === 'primary',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
    }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ReverButton',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'warning', 'danger'].indexOf(value) !== -1;
      },
      required: false,
      default: 'primary',
    },
  },
  methods: {
    handleClick: function () {
      return this.onClick();
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
