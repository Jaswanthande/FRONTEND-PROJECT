import React from 'react'
import {useState} from 'react'
import Home from './Home'

function Addnewdoctor() {
  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let [gender, setGender] = useState("")
  let [specialization, setSpecialization] = useState("")
  let [salary, setSalary] = useState("")
  let [image, setImage] = useState("")
  let [newdoctor, setNewdoctor] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    let formdetails = {id:Date.now(),name, age, gender, specialization, salary,image}
    setNewdoctor(formdetails)
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
      <Home newdoctor={newdoctor}/>
    </div>

  )
}

export default Addnewdoctor