import React from 'react'
import Card from './Card'
function Cards() {
    return (
        <div className = "container p-5  justify-content-center">
            <div className = "container row">
                <div className="col-md-6 col-sm-6"><Card/></div>
                <div className="col-md-6 col-sm-6"><Card/></div>
            </div>
       </div>
       )
}

export default Cards
