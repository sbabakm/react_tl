import React from "react";
const UserInfo = props => {
  return (
    <div className="text-center">
      <img className="img-thumbnail img-fluid" src={props.imgurl} alt="" />
      <span className="card bg-danger shadow user-fullname">
        {props.username}
      </span>
      <p className="m-2">{props.text}</p>
    </div>
  );
};
export default UserInfo;
