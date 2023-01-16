<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>
<template>
  <slot name="trigger" :setIsOpen="setIsOpen" />
  <Dialog :open="isOpen" @close="setIsOpen">
    <!-- <div class="fixed inset-0 bg-black/70" /> -->

    <DialogPanel>
      <slot name="content" :setIsOpen="setIsOpen" />
    </DialogPanel>
  </Dialog>
</template>
