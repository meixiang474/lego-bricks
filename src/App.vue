<template>
  <l-text></l-text>
  <l-shape background-color="red" height="100px"></l-shape>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LText, LShape } from "@/components";

export default defineComponent({
  name: "App",
  components: {
    LText,
    LShape,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
