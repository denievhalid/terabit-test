import { createStore } from "vuex";
import { User } from "../api";
import { getRandomNumber } from "../utils";

export const ACTIONS = {
  FETCH_USER: "fetchUser",
  FETCH_USERS: "fetchUsers",
  CREATE_USER: "createUser",
  DELETE_USER: "deleteUser",
};

export const MUTATIONS = {
  SET_USER: "setUser",
  UNSHIFT_USER: "unshiftUser",
  PUSH_USERS: "pushUsers",
  INCREMENT_PAGE: "incrementPage",
  SET_CAN_LOAD_MORE: "setCanLoadMore",
  FILTER_USERS: "filterUsers",
};

export default createStore({
  state: {
    users: [],
    user: null,
    page: 1,
    canLoadMore: true,
  },

  actions: {
    /**
     * Получение пользователя по ID
     *
     * @param commit
     * @param id
     * @returns {Promise<unknown | T>}
     */
    [ACTIONS.FETCH_USER]({ commit }, id) {
      return User.getById(id)
        .then((user) => {
          commit(MUTATIONS.SET_USER, user);
        })
        .catch(Promise.reject);
    },

    /**
     * Получение списка всех пользователей
     *
     * @param commit
     * @param state
     * @returns {Promise<unknown | T>}
     */
    [ACTIONS.FETCH_USERS]({ commit, state }) {
      return User.getList(state.page)
        .then(({ data }) => {
          commit(MUTATIONS.INCREMENT_PAGE);
          commit(MUTATIONS.PUSH_USERS, data.data);
          commit(MUTATIONS.SET_CAN_LOAD_MORE, data.total_pages >= state.page);
        })
        .catch(Promise.reject);
    },

    /**
     * Удаление пользователя из списка
     *
     * @param commit
     * @param id
     * @returns {Promise<AxiosResponse<any> | T>}
     */
    [ACTIONS.DELETE_USER]({ commit }, id) {
      return User.delete(id)
        .then(() => {
          commit(MUTATIONS.FILTER_USERS, id);
        })
        .catch(Promise.reject);
    },

    [ACTIONS.CREATE_USER]({ commit }, credentials) {
      return User.create(credentials)
        .then((user) => {
          commit(MUTATIONS.UNSHIFT_USER, {
            ...user,
            avatar: `https://i.pravatar.cc/100?img=${getRandomNumber(1, 70)}`,
          });
        })
        .catch(Promise.reject);
    },
  },

  mutations: {
    [MUTATIONS.SET_USER](state, payload) {
      state.user = payload;
    },

    [MUTATIONS.PUSH_USERS](state, payload) {
      state.users.push(...payload);
    },

    [MUTATIONS.UNSHIFT_USER](state, payload) {
      state.users.unshift(payload);
    },

    [MUTATIONS.INCREMENT_PAGE](state) {
      state.page++;
    },

    [MUTATIONS.SET_CAN_LOAD_MORE](state, payload) {
      state.canLoadMore = payload;
    },

    [MUTATIONS.FILTER_USERS](state, payload) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});
