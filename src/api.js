import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

class User {
  /**
   * Метод для получения списка всех пользователей
   *
   * @param page
   * @returns {Promise<AxiosResponse<any>>}
   */
  static getList(page = 1) {
    return api.get(`/users/?page=${page}`);
  }

  /**
   * Метод для получения пользователя по ID
   *
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  static getById(id) {
    return api.get(`/users/${id}`).then(resolveResponse);
  }

  /**
   * Метод для создания пользователя
   *
   * @param credentials
   * @returns {Promise<AxiosResponse<any>>}
   */
  static create(credentials) {
    return api.post(`/users`, credentials).then(resolveResponse);
  }

  /**
   * Метод для удаления пользователя
   *
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  static delete(id) {
    return api.delete(`/users/${id}`);
  }
}

const resolveResponse = ({ data }) => (data.data ? data.data : data);

export { User };
