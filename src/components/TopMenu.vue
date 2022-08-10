<template>
  <nav class="top-menu header__top-menu">
    <ul class="top-menu__list">
      <li class="top-menu__item" v-for="item in items" :key="item.link">
        <router-link class="top-menu__link" :to="item.to">
          {{ item.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { ROUTES } from "../router";

const items = ref([
  {
    title: "Пользователи",
    to: ROUTES.USER_LIST,
  },
  {
    title: "Добавить пользователя",
    to: ROUTES.USER_CREATE,
  },
]);
</script>

<style lang="scss">
.top-menu {
  &__list {
    display: flex;
    list-style-type: none;
  }

  &__link {
    font-size: 15px;
  }

  &__item + .top-menu__item {
    margin-left: 30px;
  }
}
</style>
