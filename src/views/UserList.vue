<template>
  <div class="users page">
    <h1 class="page__title">Пользователи</h1>
    <div class="page__title users__inner">
      <User
        @deleteUser="deleteUserHandler"
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
    <LoadMore v-if="canLoadMore" @fetchUsers="fetchUsers" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import User from "../components/User";
import { computed, onMounted } from "vue";
import { ACTIONS } from "../store";
import LoadMore from "../components/LoadMore";

const { dispatch, state } = useStore();
const canLoadMore = computed(() => state.canLoadMore);
const users = computed(() => state.users);

const fetchUsers = () => dispatch(ACTIONS.FETCH_USERS);

const deleteUserHandler = (id) => dispatch(ACTIONS.DELETE_USER, id);

onMounted(fetchUsers);
</script>

<style lang="scss">
.users {
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
  }

  &__load-more {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
