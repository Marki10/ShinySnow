import axios from "axios";

export default class UserService {
  fetchUsers(): Promise<Object> {
    return axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users"
    });
  }
}
