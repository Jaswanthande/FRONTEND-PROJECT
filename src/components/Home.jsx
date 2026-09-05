import React from 'react'
import {useState,useEffect} from 'react'
import Doctorcard from './Doctorcard';

function Home({newdoctor}) {
    let [doctors, setDoctors] = useState([])
    let [search, setSearch] = useState("")
    let [specialization, setSpecialization] = useState("")

    function getapidata(){
        let data = [
        {
            id: 1,
            name: "Jaswanth",
            age: 21,
            gender: "Male",
            specialization: "Heart",
            salary: 500000,
            image: "https://i.pinimg.com/1200x/4a/74/9d/4a749dc05ac82ae7000e5ba6f2aa9831.jpg"
        },

        {
            id: 2,
            name: "Jahnavi",
            age: 21,
            gender: "Female",
            specialization: "Bones",
            salary: 500000,
            image: "https://i.pinimg.com/736x/b2/38/ce/b238ce951caa669201646f9d87bc4d82.jpg"
        },
        {
            id: 3,
            name: "Yaswanth",
            age: 21,
            gender: "Male",
            specialization: "Eye",
            salary: 500000,
            image: "https://i.pinimg.com/1200x/31/6b/eb/316beb3ee8cdb849f10b5d24b97a6645.jpg"
        },
        ];
        setDoctors(data)
    }


    useEffect(()=>{
        getapidata()
    },[])


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
                   name={doctor.name}
                   age={doctor.age}
                   gender={doctor.gender}
                   specialization={doctor.specialization}
                   salary={doctor.salary}
                   image={doctor.image}
                   key={doctor.id}/>
            })}
            </div>):(<h1>Loading...</h1>)}
    </div>

  )
}

export default Home