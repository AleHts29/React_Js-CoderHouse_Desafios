import React from 'react'
import './App.css';
import Navbar from './componets/navbarComponents/Navbar'
import { NAME_APP } from './utils/const';
import HomeContainer from './containers/HomeContainer'



function App() {
  return (
    <>
    <Navbar/> 
    <HomeContainer greeting={NAME_APP}/>

    </>
  )
}

export default App

