import appReducer from "./appReducer";

import initialState from "../initialState";

import { SET_APP_STATUS } from "../types";

describe("appReducer", () => {
  test("Initial state exist", () => {
    expect(appReducer(initialState, {})).toEqual(initialState);
  });

  test("Call 'SET_APP_STATUS'", () => {
    const action = { type: SET_APP_STATUS, status: "New status" };
    const expectedState = { appStatus: "New status" };

    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
});
