import React from 'react';
import img1 from './assets/ABLETON.png';
import {ButtonComponent} from '../ButtonComponent'

const Card = ({productData}) => {
    return (
    
    <>
        <div className="container row justify-content-center">
        <div className = " col-sm-6 card bg-dark">
            
            <img src={img1} alt="" />
            <div className = "card-body text-center">
                <h4 className = "card-title "> {productData.name}</h4>
                <p className = "card-text ">{productData.description}</p>
                <strong className="text-warning">Price: $ {productData.price}</strong>
            </div>
            <div className="m-3 text-center">
                <ButtonComponent  text={'Comprar'}/>
            </div>
            
            
        </div>  
        </div>
    </>
    )
}

export default Card


