import Accordion from "../components/Accordion.vue";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => ({
  computed: {
    props() {
      return args;
    },
  },

  template: `
      <div class="p-4 flex flex-col gap-4">
        <Accordion v-for="item in props.items">
        <template #header="{ toggle }">
          <button @click="toggle">{{ item.header }}</button>
        </template>
        <template #content>
          <p>
            {{ item.content }}
          </p>
        </template>
      </Accordion>
      </div>
`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      header: "Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
    },
    {
      header: "Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
    },
    {
      header: "Item 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
    },
  ],
};
