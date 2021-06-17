import React from 'react'
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './componets/navbarComponents/Navbar.js'
import Cards from './componets/cardsComponents/Cards'

function App() {
  return (
    <div className ="App">
      <Navbar/>
        <Cards>
        <h1>HOLA</h1>
        </Cards>
    </div>

    // <div className ="App" >
    // <Navbar/>
    // <ItemListContainer greeting = {"Hola"}/>
    // </div>
  )
}

export default App