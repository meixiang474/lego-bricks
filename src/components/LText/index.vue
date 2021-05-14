<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
    >{{ text }}</component
  >
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropNames,
} from "../defaultProps";
import useComponentCommon from "../hooks/useComponentCommon";

type ComponentMode = "edit" | "preview";

const defaultProps = transformToComponentProps(textDefaultProps);

export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    mode: {
      type: String as PropType<ComponentMode>,
      default: "preview",
    },
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style></style>
