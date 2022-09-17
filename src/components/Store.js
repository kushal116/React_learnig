import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { set } from 'react-hook-form'

export const Store = () => {
  
const [data, setdata] = useState()
const [data1, setdata1] = useState()
    var UserName = "jay"
    var email= "pkushal210@gmail.com"
   const storeData= ()=>{
    localStorage.setItem("name",UserName)
    sessionStorage.setItem("email",email)
    setdata(localStorage.getItem("name"))

  
    alert("data stored...")
    
  }
  const getData= () =>{
  
   console.log(data); 
    
    setdata1(sessionStorage.setItem("email",email))
  }
  const clearData = () =>{
    localStorage.clear()
    alert("clearData")
    setdata('')
  }
    
  return (
    <div>
      {data}
<button onClick={storeData}> Store data</button>
<button onClick={getData}>Get data</button>
<button onClick={clearData}> clear data</button>

    </div>
  )
}
