import React from "react";
import { connect } from "react-redux";

import { User } from "../../../Interfaces";

function Users({ users }): object {
  return (
    <React.Fragment>
      <div className="page">
        <h3 className="page__header">Users</h3>
        <ul>{getUsersList(users)}</ul>
      </div>
    </React.Fragment>
  );
}

function getUsersList(users: Array<User>): object {
  if (users) {
    return users.map((user: User) => {
      if (user) return <li key={user.id}>{user.name}</li>;
    });
  } else {
    return {};
  }
}

const mapStateToProps = (state: any): object => {
  const { users } = state.UserReducer;
  return { users };
};

export default connect(mapStateToProps)(Users);
