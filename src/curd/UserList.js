import React from 'react'
import Users from './Users';

const UserList = (props) => {
  
  return (
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      props.users.map((users) => {
        return(
        <tr>
        <th scope="row">{users.id}</th>
        <td>{users.name}</td>
        <td>{users.age}</td>
        <td>{ users.isActive ? "Active" : "Inactive" }</td>
        <td><button className='btn btn-danger' onClick={()=>{props.Delete(users)}} >Delete</button></td>
      </tr>
      );
      })
    }
    
   
  </tbody>
</table>
    </div>
  )
}

export default UserList
