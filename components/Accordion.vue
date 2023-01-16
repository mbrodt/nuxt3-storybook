<script setup lang="ts">
import gsap from "gsap";
import { ref, onMounted } from "vue";

const isOpen = ref(false);
const content = ref(null as HTMLElement | null);

const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "power1.inOut" },
});

const toggle = () => {
  isOpen.value = !isOpen.value;
  if (tl.paused() || tl.reversed()) {
    tl.play();
  } else {
    tl.reverse();
  }
};

onMounted(() => {
  gsap.set(content.value, { height: "auto" });
  tl.from(content.value, {
    height: 0,
  });
});
</script>

<template>
  <div>
    <slot :toggle="toggle" :isOpen="isOpen" name="header"></slot>
    <div ref="content" class="h-0 overflow-hidden" :aria-expanded="isOpen">
      <slot name="content" :toggle="toggle" :isOpen="isOpen"></slot>
    </div>
  </div>
</template>
