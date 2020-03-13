import React from "react";
import Edit from "./edit";
const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    render() {
    return (
        <div>
            <h1>Users</h1>
          <strong>select a user</strong>
          <ul>
            dsfds
          </ul>
        </div>

    );
  }
}

export default Users;
