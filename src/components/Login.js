import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  var navigation =useNavigate()
const {register,handleSubmit}=useForm()
  const login = async ()=>{
   await axios.get("https://healthy-me-rest-api.herokuapp.com/users").then(res=>
    {
      console.log(res.data.data[0].firstName);
  localStorage.setItem("Name",res.data.data[0].firstName);

    }).catch(err=>{
      console.log(err);
    })
    navigation('/view')
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        {/* <input type="submit" value="submit" /> */}
        <button>submit</button>
      </form>
    </div>
  )
}
