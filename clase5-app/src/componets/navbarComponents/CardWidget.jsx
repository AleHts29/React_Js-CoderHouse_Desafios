import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'

import * as ReactBootStrap from 'react-bootstrap'

const CardWidget = () => {
    return (
        <div className="text-white d-flex mr-5 mt-1" size="lg">
        <div><FiShoppingCart/></div>         
        <div>
        <ReactBootStrap.NavDropdown FiShoppingCart id="collasible-ReactBootStrap.Nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
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



