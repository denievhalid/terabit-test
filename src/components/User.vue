<template>
  <div class="user">
    <div class="user__left">
      <img
        class="user__avatar"
        :src="user.avatar"
        alt=""
        width="100"
        height="100"
      />
    </div>
    <div class="user__right">
      <span class="user__name">{{ fullName }}</span>
      <span class="user__email">{{ user.email }}</span>
      <div class="user__controls">
        <button
          class="btn btn--small user__delete-btn"
          @click="deleteHandler(user.id)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["deleteUser"]);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const deleteHandler = (id) => {
  emit("deleteUser", id);
};

const fullName = computed(() => {
  return `${props.user.first_name} ${props.user.last_name}`;
});
</script>

<style lang="scss">
.user {
  display: flex;

  &:hover {
    .user__delete-btn {
      opacity: 1;
    }
  }

  &__left {
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
  }

  &__name {
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 5px;
  }

  &__email {
    color: #989898;
    margin-bottom: 10px;
  }

  &__avatar {
    border-radius: 50%;
  }

  &__delete-btn {
    color: var(--color-red);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
}
</style>
