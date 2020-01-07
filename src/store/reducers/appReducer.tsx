import { SET_APP_STATUS } from "../types";

import initialState from "../initialState";

export default (state: any = initialState, action: any): any => {
  switch (action.type) {
    case SET_APP_STATUS:
      return {
        ...state,
        appStatus: action.status
      };
    default:
      return state;
  }
};
