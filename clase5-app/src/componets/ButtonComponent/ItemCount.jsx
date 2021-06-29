import {useState} from 'react'
import CardWidget from '../navbarComponents/CardWidget'

export const ItemComponent = ({productData, text}) => {
    

const [cart, setCart] = useState([]);
const [amount, setAmount] = useState(0);
console.log(amount);
console.log(cart);

let stock = 15;
let minAmount = 0;

    return (
    <>
    <div className="container d-flex justify-content-center ">

            <button class="btn btn-warning btn-up btn-sm "
                onClick = {() => {
                    if(amount > minAmount){
                        setAmount(amount-1);
                    }
                    
                }}
            >
                -
            </button>
            <p className="ml-3 mr-3">{amount}</p>
            <button class="btn btn-warning btn-down btn-sm "
            onClick = {() => {
                if (amount == stock){
                    return stock;
                }
                setAmount(amount+1);
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