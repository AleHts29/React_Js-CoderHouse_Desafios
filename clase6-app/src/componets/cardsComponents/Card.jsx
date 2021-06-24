import React from 'react';
import img1 from './assets/iphone12.jpeg';
import {ButtonComponent} from '../ButtonComponent'
import {ItemComponent} from '../ButtonComponent/ItemCount'
const Card = ({productData, children}) => {
    return (
    
    <>
        <div className="container row justify-content-center">
        <div className = " col-sm-6 card bg-dark pt-3">
            
            <img src={img1} alt="" />
            <div className = "card-body text-center">
                <h4 className = "card-title "> {productData.name}</h4>
                <p className = "card-text ">{productData.description}</p>
                <strong className="text-warning">Price: $ {productData.price}</strong>
            </div>
            <div className="m-3 text-center">
                {children}
                {/* <ItemComponent productData={productData} text={'Agregar al Carrito'}/> */}
            </div>
            
            
        </div>  
        </div>
    </>
    )
}

export default Card


