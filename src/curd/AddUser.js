import React from 'react'
import { useState } from 'react'

export const AddUser = (props) => {
  
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [isAcitve, setisAcitve] = useState()

  const namehandler = (e)=>{
console.log(e.target.value);
setname(e.target.value)
  }
  const submit = (e)=>{
    e.preventDefault() 
    // console.log(name,age,isAcitve);
    var user= {
      name:name,
      age:age,
      isActive:isAcitve,
    }
    // props.addUser(user)
    props.addUser(user)
  }
  return (
    <div><form className='conatiner mx-3 my-3' onSubmit={submit}>
      <h1>ADD USERS</h1>
    <div className="name mb-3">
      <label  className="col-sm-1 col-form-label mx-3">Name</label>
      <div className="col-sm-6">
        <input type="text" className="form-control" onChange={(e)=>{namehandler(e)}}/>
      {name}
      </div>
    </div>
    <div className="name mb-3">
      <label  className="col-sm-1 col-form-label mx-3">Age</label>
      <div className="col-sm-6">
        <input type="number" className="form-control" onChange={(e)=>{setage(e.target.value)}}/>
        {age}
      </div>
    </div>
    <fieldset className="gender mb-3">
      <label className="col-form-label  pt-0">Gender</label>

       
          <input className="form-check-input mx-2" type="radio" name="isActive"value="true" onChange={(e)=>{setisAcitve(e.target.value)}}/>
          <label className="form-check-label">
            True
          </label>
      
       
          <input className="form-check-input mx-2" type="radio" name="isActive" value="false" onChange={(e)=>{setisAcitve(e.target.value)}} />
          <label className="form-check-label" >
            Flase
          </label>
        
      
    </fieldset>
    <button type="submit" className="btn btn-primary">Add user</button>
  </form></div>
  )
}
