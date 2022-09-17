import React from "react";
import { useState } from "react";
import { AddUser } from "./AddUser";
import UserList from "./UserList";

export const Users = () => 
{
  var [users, setusers] = useState([
    {
      id: 1,
      name: "Amit",
      age: 23,
      isActive: false,
    },
    {
      id: 2,
      name: "kushal",
      age: 22,
      isActive: true,
    },
    {
      id: 3,
      name: "Harsh",
      age: 24,
      isActive: false,
    },
  ])
  const Delete = (user) => {
    users = users.filter(u => u.id !== user.id);
    //changing user
    setusers(users);
    console.log(users);
  };
  //array push
  //...spread opertaor
const addUser = (user) => {
// console.log(user)
users=[...users,user]
setusers(users)
}
  return (
    <div>
      <AddUser addUser = {addUser}/>
      <UserList users={users} Delete={Delete} />
    </div>
  )
}

export default Users;
