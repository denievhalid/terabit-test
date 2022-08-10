import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

class User {
  static getList(page = 1) {
    return api.get(`/users/?page=${page}`);
  }

  static getById(id) {
    return api.get(`/users/${id}`).then(resolveResponse);
  }

  static create(credentials) {
    return api.post(`/users`, credentials).then(resolveResponse);
  }

  static delete(id) {
    return api.delete(`/users/${id}`);
  }
}

const resolveResponse = ({ data }) => (data.data ? data.data : data);

export { User };
