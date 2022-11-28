import React from "react";
import WithErbol from "../Erbol";

const UserDetals = ({ itemList: { name, username, id, email } }) => {
  return (
    <ul>
      <li>
        <b>{id}</b>
        <br />

        <b>{name}</b>
        <br />
        <b>{username}</b>
        <br />

        <b>{email}</b>
        <br />
      </li>
    </ul>
  );
};

export default WithErbol(UserDetals);

// const UserDetals = user.map(({name,id, username, email}) =>{
//   return(
//    <ul>{UserDetals}</ul>
//   )}
