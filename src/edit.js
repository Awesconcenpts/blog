import React from "react";

const User = ({ match }) => {match.params};

class Edit extends React.Component {
    render() {
		console.log(User());
    return (
        <div>
            <h1 className="ere">xx {User}</h1>
        </div>

    );
  }
}

export default Edit;
