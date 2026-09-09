import React from 'react'
import {useState} from 'react'
import Home from './Home'
import axios from 'axios'

function Addnewdoctor() {
  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [gender, setGender] = useState("")
  let [specialization, setSpecialization] = useState("")
  let [salary, setSalary] = useState("")
  let [image, setImage] = useState("")
  let [newdoctor, setNewdoctor] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    let formdetails = {id:Date.now(),name, age, gender, specialization, salary,image}
    await axios.post("https://doctorapibackend.onrender.com/doctors",formdetails)
    alert("Doctor added successfully")
    setNewdoctor(formdetails)
  }

  async function deletedata(id){
    await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
    alert("Doctor deleted successfully")
    setNewdoctor(id)
  }

  async function updatedata(id){
    let upadated={
      name:'jaswanth',
      age:21,
      gender:'male',
      specialization:'heart',
      salary:10000,
    }
    await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,upadated)
    alert("Doctor updated successfully")
    setNewdoctor(upadated)
  }

  return (
    <div>


        <h1 style={{textAlign:"center"}}>Add new doctor</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Doctor Name" />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />

            <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)}  placeholder="Enter Specialization" />
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" />
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Image URL" />

            <button type="submit">Add Doctor</button>
        </form>
      <Home updatedata={updatedata} deletedata={deletedata} newdoctor={newdoctor}/>
    </div>

  )
}

export default Addnewdoctor