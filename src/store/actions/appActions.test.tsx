import configureStore from "redux-mock-store";

// Actions to be tested
import * as appActions from "./appActions";

const mockStore = configureStore();
const store = mockStore();

describe("select_actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        status: "New status",
        type: "SET_APP_STATUS"
      }
    ];

    store.dispatch(appActions.setAppStatus("New status"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
