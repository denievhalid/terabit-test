import { createRouter, createWebHistory } from "vue-router";
import { UserDetail, UserList, UserCreate } from "../views";

export const ROUTES = {
  USER_LIST: "/",
  USER_DETAIL: "/detail/:id",
  USER_CREATE: "/create",
};

const routes = [
  {
    path: ROUTES.USER_LIST,
    component: UserList,
    meta: {
      title: "Пользователи",
    },
  },
  {
    path: ROUTES.USER_DETAIL,
    component: UserDetail,
    meta: {},
  },
  {
    path: ROUTES.USER_CREATE,
    component: UserCreate,
    meta: {
      title: "Добавить пользователя",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const {
    meta: { title },
  } = to;

  document.title = title.toString();

  return next();
});

export default router;
