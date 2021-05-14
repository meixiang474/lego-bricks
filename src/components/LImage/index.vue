<template>
  <img
    :src="src"
    alt="img"
    :style="styleProps"
    @click.prevent="handleClick"
    class="l-image-component"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import useComponentCommon from "../hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "../defaultProps";
const defaultProps = transformToComponentProps(imageDefaultProps);

type ComponentMode = "edit" | "preview";

export default defineComponent({
  name: "l-image",
  props: {
    mode: {
      type: String as PropType<ComponentMode>,
      default: "preview",
    },
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
