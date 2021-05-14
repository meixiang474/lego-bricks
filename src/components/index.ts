import { App } from "vue";
import LText from "./LText";
import LImage from "./LImage";
import LShape from "./LShape";

const components = [LText, LImage, LShape];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install, LText, LImage, LShape };

export * from "./defaultProps";

export default {
  install,
};
