<template>
  <header class="header">
    <div class="header__inner container">
      <a href="" class="header__logo"></a>
      <TopMenu />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.header {
  height: 70px;
  border-bottom: 1px solid #dfdfdf;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
  }
}
</style>
<script>
import TopMenu from "./TopMenu";
export default {
  components: { TopMenu },
};
</script>
