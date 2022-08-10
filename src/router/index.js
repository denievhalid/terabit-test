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
  },
  {
    path: ROUTES.USER_DETAIL,
    component: UserDetail,
  },
  {
    path: ROUTES.USER_CREATE,
    component: UserCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
