import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Products = () => {
  var navigate= useNavigate()
  var products=[{ 
    id:101,
    name:'I-pad',
  },
  {
   id:102,
   name:"I-phone",
  },
 {
  id:103,
  name:"I-watch"
 }
]
return(
  <div>
    {
      localStorage.getItem("name") ?
 products.map(product=>{
  return (
    
      <ul>
        <Link to= {`/product/${product.name}`}> Product {product.id}</Link>
      </ul>

     )
    })

:navigate('/login')
    }
 
</div>
)

}
