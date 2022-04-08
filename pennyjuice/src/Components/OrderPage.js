import React from 'react'


const OrderPage = ({
    flavors
}) => {
    return (
        <>
       
        <div className = "item">
           <p>{flavors}</p>                    
           </div> 
           <div className = "itemamount">
                   <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>                 
                     <button id = "add"> + </button>
                    </div>
           </div>
              
        </>
    )
}

export default OrderPage


