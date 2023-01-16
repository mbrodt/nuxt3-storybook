<script setup lang="ts">
interface Props {
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button
    class="btn transition-colors duration-300 ease-in-out"
    :class="{
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-tertiary': variant === 'tertiary',
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply rounded-md py-2 px-4 transition-colors duration-300 ease-in-out disabled:cursor-not-allowed;
}
.btn-primary {
  @apply bg-gray-800 text-white font-bold disabled:!bg-gray-400;
}
.btn-secondary {
  @apply border-gray-800 border text-gray-800 font-bold disabled:!text-gray-400 disabled:!border-gray-400;
}
.btn-tertiary {
  @apply text-gray-800 underline disabled:!text-gray-400;
}
</style>
