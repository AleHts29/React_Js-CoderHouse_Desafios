import React from 'react'
import './App.css';
import Navbar from './componets/navbarComponents/Navbar'
import { NAME_APP } from './utils/const';
import HomeContainer from './containers/itemsListContainer/ItemListContainer'
import ItemDetail from './containers/itemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <Navbar count={2}/>
      {/* <HomeContainer  greeting={NAME_APP}/> */}
      <ItemDetail  greeting={NAME_APP}/>
    </>
  )
}

export default App

