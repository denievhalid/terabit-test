<template>
  <header class="header">
    <div class="header__inner container">
      <Logo />
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
import Logo from "./Logo";
export default {
  components: { Logo, TopMenu },
};
</script>
