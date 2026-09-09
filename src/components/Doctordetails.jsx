import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'   
import { useEffect } from 'react'
import axios from 'axios'

function Doctordetails() {
    let {id} = useParams()
    let [doctor,setDoctor] = useState()

    async function getapidata() {
        let response = await axios.get("https://doctorapibackend.onrender.com/doctors")
        let finaldata = response.data.find((val)=> id == val.id)
        setDoctor(finaldata)
    }

    useEffect(()=>{
        getapidata()
    },[])
  return (
    <div>
        {doctor && (
        <div>
    <h1>{doctor.id}</h1>
    <h1>{doctor.name}</h1>
    <h1>{doctor.age}</h1>
    <h1>{doctor.gender}</h1>
    <h1>{doctor.specialization}</h1>
    </div>
        )}
        </div>
  )
}
export default Doctordetails