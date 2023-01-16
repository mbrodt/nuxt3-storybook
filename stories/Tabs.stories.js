import Tabs from "../components/Tabs.vue";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = (args) => ({
  computed: {
    props() {
      return args;
    },
  },

  template: `
      <div class="p-4">
        <Tabs v-bind={...props}>
        <template #tab1>
          <p>First tab content</p>
          <Button variant='primary'>
          Primary
          </Button>
        </template>
        <template #tab2>
          <p>Second tab content</p>
          <Button variant='secondary'>
            Secondary
          </Button>
        </template>
        <template #tab3>
          <p>Third tab content</p>
          <Button variant='tertiary'>
            Tertiary
          </Button>
        </template>
        </Tabs>
      </div>
`,

  template: `
      <div class="p-4">
        <Tabs v-bind={...props}>
        <template #tab1>
          <p>First tab content</p>
          <Button variant='primary'>
          Primary
          </Button>
        </template>
        <template #tab2>
          <p>Second tab content</p>
          <Button variant='secondary'>
            Secondary
          </Button>
        </template>
        <template #tab3>
          <p>Third tab content</p>
          <Button variant='tertiary'>
            Tertiary
          </Button>
        </template>
        </Tabs>
      </div>
`,
});

export const Default = Template.bind({});
Default.args = {
  tabTitles: ["Tab 1", "Tab 2", "Tab 3"],
};
