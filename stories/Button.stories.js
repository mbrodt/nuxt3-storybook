import Button from "../components/Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => ({
  computed: {
    props() {
      return args;
    },
  },

  template: `
      <div class="p-4">
        <Button v-bind={...props}>Button</Button>
      </div>
`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};
