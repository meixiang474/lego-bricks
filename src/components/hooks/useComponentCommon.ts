import {
  ImageComponentProps,
  ShapeComponentProps,
  TextComponentProps,
} from "../defaultProps";
import { computed } from "@vue/runtime-core";
import { pick } from "lodash-es";

export type ComponentMode = "edit" | "preview";

const useComponentCommon = (
  props: Readonly<
    Partial<
      TextComponentProps & {
        mode: ComponentMode;
        tag: string;
      } & ImageComponentProps &
        ShapeComponentProps
    >
  >,
  picks: string[]
) => {
  const styleProps = computed<{ [key: string]: string }>(
    () => pick(props, picks) as { [key: string]: string }
  );
  const handleClick = () => {
    if (props.mode === "edit") {
      return;
    }
    if (props.actionType === "url" && props.url) {
      window.open(props.url, "_blank");
    }
  };
  return {
    styleProps,
    handleClick,
  };
};

export default useComponentCommon;
