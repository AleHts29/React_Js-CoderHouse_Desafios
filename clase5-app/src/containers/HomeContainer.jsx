import React from 'react'
import {useState} from 'react'

import { NAME_APP } from '../utils/const';
// import Cards from './componets/cardsComponents/Cards'
import Card from '../componets/cardsComponents/Card'
import Navbar from '../componets/navbarComponents/Navbar'
import {ButtonComponent} from '../componets/ButtonComponent'
import {ItemComponent} from '../componets/ButtonComponent/ItemCount'


const HomeContainer = ({greeting}) => {        
const product = [{id:1, name:'iphone-12', price:1050, description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis minima quo repellat'}
];

// const [cart, setCart] = useState([]);
// console.log(product.price);

return (
    <div className =" App" >
      {/* <Navbar/> */}
      {/* <Navbar count={Card.length}/> */}
      <header className = "container App-header">
       
        <h1 className="text-dark text-center">{greeting}</h1>
        <Card productData={product} > 
        <ItemComponent productData={product} text={'Agregar al Carrito'}
          />
        </Card>
        <div className="m-3">
            <ButtonComponent text={'Ver mas productos!!'}/> 
            
        </div>
             
      </header>
    </div> 
       
    )
}

export default HomeContainer
