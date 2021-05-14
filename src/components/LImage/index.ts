import { App } from "vue";
import LImage from "./index.vue";

LImage.install = (app: App) => {
  app.component(LImage.name, LImage);
};

export default LImage;
