<template>
  <div
    :style="styleProps"
    class="l-shape-component"
    @click.prevent="handleClick"
  ></div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import useComponentCommon from "../hooks/useComponentCommon";
import {
  transformToComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "../defaultProps";
const defaultProps = transformToComponentProps(shapeDefaultProps);

type ComponentMode = "edit" | "preview";

export default defineComponent({
  name: "l-shape",
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
      shapeStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
