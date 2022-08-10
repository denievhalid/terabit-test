<template>
  <div class="load-more users__load-more">
    <button class="btn btn--outline" @click="clickHandler">
      Загрузить еще
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["fetchUsers"]);

const clickHandler = () => {
  emit("fetchUsers");
};
</script>

<style lang="scss"></style>
