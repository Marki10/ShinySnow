import initialState from "./store/initialState";

describe('App', () => {
  it('Initial state inited', () => {
    expect(typeof initialState).toEqual(typeof {});
  });
});