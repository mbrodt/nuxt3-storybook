<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: "Hello World",
  },
  color: {
    type: String,
    default: "blue",
  },
  count: {
    type: Number,
    default: 10,
  },
});
</script>

<template>
  <div
    class="font-bold text-5xl"
    :style="{
      color: color,
    }"
  >
    {{ msg }}
  </div>
  <!-- <Button variant="">btn</Button> -->
  <Accordion
    :items="[
      { header: 'title1', content: 'content1' },
      { header: 'title2', content: 'content2' },
      { header: 'title3', content: 'content3' },
    ]"
  ></Accordion>
</template>
