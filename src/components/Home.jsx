import React from 'react'
import {useState,useEffect} from 'react'
import Doctorcard from './Doctorcard';
import axios from 'axios';

function Home({newdoctor,deletedata,updatedata}) {
    let [doctors, setDoctors] = useState([])
    let [search, setSearch] = useState("")
    let [specialization, setSpecialization] = useState("")

        async function getapidata() {
            let response = await axios.get("https://doctorapibackend.onrender.com/doctors")
            console.log(response)
            console.log(response.data)
            setDoctors(response.data)
        }
    


    useEffect(()=>{
        getapidata()
    },[newdoctor])


    useEffect(()=>{
        if(newdoctor){
            setDoctors((prevDoctors) => [...prevDoctors, newdoctor])
        }
    }, [newdoctor])


    let filteredDoctors = doctors.filter((val,ind)=>{
        return(val.name.toLowerCase().includes(search.toLowerCase()) && (specialization === "" || val.specialization === specialization) )
    })


  return (
    <div>
    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search doctor' />
      <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} type="text" placeholder='Select specialization'>
        <option value="" selected disabled>Select specialization</option>
        <option value="Bones">Bones</option>
        <option value="Muscles">Muscles</option>
        <option value="Heart">Heart</option>
      </select>
        {doctors.length>0 ?(
            <div className='doctorcontainer'>
                {filteredDoctors.map((doctor) => {
                   return <Doctorcard 
                   deletedata={deletedata}
                   updatedata={updatedata}
                   name={doctor.name}
                   age={doctor.age}
                   gender={doctor.gender}
                   specialization={doctor.specialization}
                   salary={doctor.salary}
                   image={doctor.image}
                   key={doctor.id}
                   id={doctor.id}/>

            })}
            </div>):(<h1>Loading...</h1>)}
    </div>

  )
}

export default Home