import React from 'react'
import { useParams } from 'react-router-dom'

export const Conatctdetail = () => {
    var id = useParams().id;
  return (
    <div>
        <h1>Conatct detail....{id}</h1>
    </div>
  )
}
