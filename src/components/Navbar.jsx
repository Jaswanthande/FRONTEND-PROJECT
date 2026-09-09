import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()
  return (
    <header>
        <h1>Doctors App</h1>
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/addnewdoctor')}>Add New Doctor</button>
        </div>
    </header>
  )
}

export default Navbar