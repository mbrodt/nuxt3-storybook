import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld,
};

const Template = (args) => ({
  computed: {
    props() {
      return args;
    },
  },

  template: `
      <div class="flex flex-col gap-y-4">
        <HelloWorld v-bind={...props} />
      </div>
`,
});

export const Primary = Template.bind({});
