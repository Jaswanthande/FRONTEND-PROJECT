import React from 'react'
function Doctorcard({image,name,gender,specialization}) {
  return (
    <div>
        <div style={{width:'400px' ,height:'400px'}}>
        <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>View Details</button>
    </div>
  )
}

export default Doctorcard