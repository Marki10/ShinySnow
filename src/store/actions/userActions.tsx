import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../types";
import { User } from "../../Interfaces";
import UserService from "../../services/userService";

const userService = new UserService();

export const fetchUsers = () => {
  return dispatch => {
    userService
      .fetchUsers()
      .then((response: any) => {
        dispatch(fetchUsersSuccess(response));
      })
      .catch((error: any) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

const fetchUsersSuccess = (users: Array<User>) => ({
  type: FETCH_USERS_SUCCESS,
  users
});
const fetchUsersFailure = (error: any) => ({
  type: FETCH_USERS_FAILURE,
  error
});
