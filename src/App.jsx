import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
// import {useState} from 'react'
// import {useEffect} from 'react'
function App() {
  // let [count, setCount] = useState(0)
  // let [data,newData] = useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
  return (
    <div>
      {/* {data}
      <button onClick={()=>{let a=prompt('Enter your name');newData(a)}}>Click me</button>
      count : {count}
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/addnewdoctor' element={<Addnewdoctor/>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
      </Routes>
      {/* <Section/>
      <div className='doctorcontainer'>
        <Doctorcard image='https://i.pinimg.com/1200x/4a/74/9d/4a749dc05ac82ae7000e5ba6f2aa9831.jpg' name='Jaswanth' gender='Male' specialization='Heart spacilist'/>
        <Doctorcard image='https://i.pinimg.com/736x/b2/38/ce/b238ce951caa669201646f9d87bc4d82.jpg' name='Jahnavi' gender='Female' specialization='Neuro specialist'/>
        <Doctorcard image='https://i.pinimg.com/1200x/31/6b/eb/316beb3ee8cdb849f10b5d24b97a6645.jpg' name='Yaswanth' gender='Male' specialization='Dentist specialist'/>
      </div>
      <Addnewdoctor/> */}
    </div>
  )
}

export default App