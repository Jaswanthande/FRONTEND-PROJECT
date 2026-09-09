import React from 'react'
import {useNavigate} from 'react-router-dom'
function Doctorcard({image,name,gender,age,specialization,id,deletedata,updatedata}) {
  let navigate = useNavigate()
  return (
    <div>
        <div style={{width:'400px' ,height:'400px'}}>
        <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)}>View details</button>
        <button onClick={()=>deletedata(id)}>Delete</button>
        <button onClick ={()=>updatedata(id)}>Update</button>
    </div>
  )
}

export default Doctorcard