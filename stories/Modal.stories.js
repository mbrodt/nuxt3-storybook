import Modal from "../components/Modal.vue";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args) => ({
  computed: {
    props() {
      return args;
    },
  },

  template: `
      <div class="p-4">
        <Modal v-bind={...props}>
        <template #trigger={setIsOpen}>
        <Button variant='primary' @click="setIsOpen(true)">click me</Button>
        </template>
        <template #content={setIsOpen}>
        hello world
        <button @click="setIsOpen(false)">click me</button>
        </template>
        </Modal>
      </div>
`,
});

export const Default = Template.bind({});
// Default.args = {
//   items: [
//     {
//       header: "Item 1",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
//     },
//     {
//       header: "Item 2",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
//     },
//     {
//       header: "Item 3",
//       content:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe sit unde perferendis nostrum sunt cupiditate aperiam, autem, hic, harum enim tempora dolores tempore. Qui laudantium ex perspiciatis sunt aut animi fugiat deserunt error, fugit, aliquam officiis, aspernatur expedita mollitia veritatis dignissimos debitis quam omnis inventore itaque sapiente cumque harum?",
//     },
//   ],
// };
