import { SET_APP_STATUS } from "../types";

export const setAppStatus = (status: string): object => ({
  type: SET_APP_STATUS,
  status
});
