import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

export const ViewUser = () => {
    const navigation= useNavigate();
    useEffect(() => {
      getAllUsers();
    }, [])
   const [users, setusers] = useState([])
   const getAllUsers =async(data)=>{
    await axios.get("https://healthy-me-rest-api.herokuapp.com/users").then(res=>{
        setusers(res.data.data);
    }).catch(err=>{console.log(err)})
   } 

  return (
    <div>
        {
            localStorage.getItem('Name') ?
        
                 <><h1>View User</h1>
                      <table class="table">
                          <thead>
                              <tr>
                                  <th scope="col">id</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">DOB</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Contact</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                            {
                                users.map(doc=>{
                                    return(
                                        <tr>
                                            <th scope="row">{doc._id}</th>
                                            <th>{doc.firstName}</th>
                                            <th>{doc.lastName}</th>
                                            <th>{doc.Dob}</th>
                                            <th>{doc.email}</th>
                                            <th>{doc.contact}</th>
                                            <th>{doc.gender}</th>
                                        </tr>
                                    )
                                })
                            }


                          </tbody>
                      </table>
                  </>
                :navigation("/login")
        }

    </div>
  )
}
