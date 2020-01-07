import { FETCH_USERS_SUCCESS } from "../types";

import initialState from "../initialState";

export default (state: any = initialState, action: any): any => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users.data
      };
    default:
      return state;
  }
};
