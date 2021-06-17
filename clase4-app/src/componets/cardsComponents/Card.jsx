import React from 'react';
import img1 from './assets/ABLETON.png';


function card({children}) {
    return (
        <div className = "card">
            <img src={img1} alt="" />
            <div className = "card-body">
                <h4 className = "card-title "> My Title</h4>
                <p className = "card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis minima quo repellat, debitis, excepturi expedita officia consequatur vel porro veritatis voluptatem distinctio unde dignissimos eius quibusdam velit, id tenetur.</p>
{children}
            </div>
            
        </div>
    )
}

export default card
