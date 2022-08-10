<template>
  <div class="error">
    <span class="error__message">{{ message }}</span>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.error {
  &__message {
    color: var(--color-red);
  }
}
</style>
