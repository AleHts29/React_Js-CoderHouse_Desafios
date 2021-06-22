import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'

import * as ReactBootStrap from 'react-bootstrap'

const CardWidget = () => {
    return (
        <div className="text-white d-flex mr-5 mt-1" size="lg">
        <div><FiShoppingCart/></div>         
            <div>
            <ReactBootStrap.NavDropdown FiShoppingCart id="collasible-ReactBootStrap.Nav-dropdown">
                       
            <div class="container">
                <table class="table md-12 m-4">
                    <thead>
                        <tr class="col">
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col ">Cantidad</th>
                            <th scope="col">Total</th>
                            
                        </tr>
                    </thead>
                    <tbody id="items"></tbody>
                    <tfoot>
                        <tr id="footer">
                            <th scope="row" colspan="5"> Carrito vacio - llenar</th>
                        </tr>
                    </tfoot>
                </table>
            </div>


           <div>
            <td>
                <button class="btn btn-warning btn-up btn-sm ml-5">
                    +
                </button>
                <button class="btn btn-warning btn-down btn-sm ml-1">
                    -
                </button>
            </td> 
           </div>
       

        </ReactBootStrap.NavDropdown> 
      </div>
      
        </div>
    )
}

export default CardWidget



