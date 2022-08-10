<template>
  <div class="user-detail page">
    <div v-if="isLoading">loading...</div>

    <template v-else-if="user">
      <h1 class="user-detail__name">{{ normalizeUserName(user) }}</h1>

      <div class="user-detail__info">
        <div class="user-detail__left">
          <img
            class="user-detail__avatar"
            :src="user.avatar"
            alt=""
            width="128"
            height="128"
          />
        </div>

        <div class="user-detail__right">
          <span class="user-detail__email">Email: {{ user.email }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ACTIONS } from "../store";
import { normalizeUserName } from "../utils";

const route = useRoute();

const { dispatch, state } = useStore();

const user = computed(() => state.user);

const isLoading = ref(true);

onMounted(() => {
  dispatch(ACTIONS.FETCH_USER, route.params.id).finally(() => {
    isLoading.value = false;
  });
});
</script>

<style lang="scss">
.user-detail {
  &__name {
    margin-bottom: 30px;
  }

  &__info {
    display: flex;
  }

  &__left {
  }

  &__right {
    padding-left: 30px;
  }
}
</style>
