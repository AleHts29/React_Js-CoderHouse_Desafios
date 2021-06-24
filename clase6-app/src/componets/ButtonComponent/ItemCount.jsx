import {useState} from 'react'
import CardWidget from '../navbarComponents/CardWidget'

export const ItemComponent = ({productData, text}) => {
    

const [cart, setCart] = useState([]);
const [amount, setAmount] = useState(0);
console.log(amount);
console.log(cart);



    return (
    <>
    <div className="container d-flex justify-content-center ">

            <button class="btn btn-warning btn-up btn-sm "
                onClick = {() => {
                     setAmount(amount-1)
                }}
            >
                -
            </button>
            <p className="ml-3 mr-3">{amount}</p>
            <button class="btn btn-warning btn-down btn-sm "
            onClick = {() => {
                setAmount(amount+1)
           }}
            >
                +
            </button>
    </div>  
    
    <button onClick={() => {setCart([...cart, {productData}])}}> {text} 
        
    </button>
    
    <CardWidget cart={cart}/>
    </>
    )
}