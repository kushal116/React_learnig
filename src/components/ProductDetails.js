import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    let id = useParams().id;
  return (
    <div>ProductDetails..... {id}</div>
  )
}
