import "../assets/css/main.css";
import { defineAsyncComponent } from "vue";
import { forEach, camelCase, startCase } from "lodash";
import { app } from "@storybook/vue3";

const files = import.meta.glob("../components/**/*.vue");
console.log("files:", files);
const pascalCase = (string) => startCase(camelCase(string)).replace(/ /g, "");

// Import all components dynamically
let components = {};
forEach(files, (component, key) => {
  const name = pascalCase(
    key
      .split("/")
      .pop()
      .replace(/\.\w+$/, "")
  );
  components[name] = defineAsyncComponent(component);
});
components = { ...components };
console.log("components:", components);
export const parameters = {
  layout: "fullscreen",
};

app.mixin({ components });
