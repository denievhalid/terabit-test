<template>
  <div class="user-create page">
    <h1 class="page__title">Добавить пользователя</h1>

    <ErrorMessage :message="errorMessage" />

    <form class="form user-create__form" @submit.prevent="onSubmitHandler">
      <div class="form__field">
        <input
          class="form__input form__input--full"
          placeholder="Введите имя"
          type="text"
          v-model.trim="credentials.first_name"
          :disabled="isLoading"
        />
      </div>
      <div class="form__field">
        <input
          class="form__input form__input--full"
          placeholder="Введите фамилию"
          type="text"
          v-model.trim="credentials.last_name"
          :disabled="isLoading"
        />
      </div>
      <div class="form__field">
        <input
          class="form__input form__input--full"
          placeholder="Введите email"
          type="email"
          v-model.trim="credentials.email"
          :disabled="isLoading"
        />
      </div>
      <div class="form__field">
        <button :disabled="isLoading" class="btn btn--primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const { push } = useRouter();
const { dispatch } = useStore();

const isLoading = ref(false);

import { computed, reactive, ref } from "vue";
import { ROUTES } from "../router";
import ErrorMessage from "../components/ErrorMessage";
import { EMPTY_FORM_FIELDS_ERROR } from "../constants";
import { ACTIONS } from "../store/types";

const errorMessage = ref("");

const credentials = reactive({
  first_name: "",
  last_name: "",
  email: "",
});

const isValidCredentials = (data) => {
  return !!(
    data.first_name.length &&
    data.last_name.length &&
    data.email.length
  );
};

const goToUsersListPage = () => push(ROUTES.USER_LIST);

const onSubmitHandler = () => {
  errorMessage.value = "";

  if (!isValidCredentials(credentials)) {
    errorMessage.value = EMPTY_FORM_FIELDS_ERROR;
  } else {
    isLoading.value = true;

    dispatch(ACTIONS.CREATE_USER, credentials)
      .then(goToUsersListPage)
      .finally(() => {
        isLoading.value = false;
      });
  }
};
</script>

<style lang="scss">
.user-create {
  &__form {
    width: 50%;
  }

  .error {
    margin-bottom: 30px;
  }
}
</style>
