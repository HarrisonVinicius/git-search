<template>
  <!-- this is a simple and reusable component that has a slot for receiving content -->
  <button @click="emitClick" class="button">
    <slot class="button__text" />
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  methods: {
    emitClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 50px;
  width: 85%;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.button:hover {
  opacity: 0.8;
}
</style>
