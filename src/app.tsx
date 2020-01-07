import React, { Component } from "react";
import Routes from "./components/Routes";
import { connect } from "react-redux";

import { setAppStatus } from "./store/actions/appActions";
import { fetchUsers } from "./store/actions/userActions";

import "./app.scss";

interface AppState {}

interface AppProps {
  appStatus: string;
  setAppStatus(status: string): object;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.props.fetchUsers();
  }

  componentDidMount(): void {
    this.props.setAppStatus("Running!");
  }

  render(): object {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state: any): object => {
  const { appStatus } = state.AppReducer;
  const { users } = state.UserReducer;

  return { appStatus, users };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAppStatus: (status: string): void => {
      dispatch(setAppStatus(status));
    },
    fetchUsers: (): void => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
