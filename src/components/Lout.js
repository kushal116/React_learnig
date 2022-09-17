import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Lout = () => {
    var navigation = useNavigate()
    
    useEffect(() => {
    
      navigation("/login")

    }, [])
    
  return (
    <div>
      { localStorage.clear() }
    </div>
  )
}

export default Lout
