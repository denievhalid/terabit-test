<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup></script>
<script>
import Header from "./components/Header";

export default {
  components: { Header },
};
</script>
