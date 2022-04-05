import React from 'react'

const Orderform = () => {
    return (
        <div>
            <div className = "orderhero">
                <h1 className = "ordertext"> Place your order here </h1>
            </div>

            
            <div className= "ordercontainer">
            <form>
                <h2 className = "formlabel">Full Name</h2>
                
                <input className ="name" type = "text" id = "fname" name = "fname" placeholder = "First Name" required></input>
                
                <input className = "name" type = "text" id = "lname" name = "lname" placeholder= "Last Name"></input>
                <h2 className= "formlabel">Phone Number</h2>
                <input type = "number" id = "phonenum" name = "phonenum" placeholder = "000-000-0000" required></input>
                <h2 className = "formlabel">Email</h2>
                <input type = "email" id = "email" name = "email" placeholder= "youremail@example.com" required></input>
                <h2 className = "formlabel">Delivery Address</h2>
                <input type = "text" id = "address" name = "address" placeholder = " Street Address" required></input>
                <input type = "text" id = "city" name = "city" placeholder = "City" required></input>
                <input type = "text" id = "state" name = "state" placeholder = " State" required></input>
                <input type = "number" id = "zipcode" name = "zipcode" placeholder= "Zip Code" required></input>
            </form>
            </div>
            <div className = "productorder">
                <h2 className = "formlabel">Product Order</h2>
            </div>
        </div>

    )
}

export default Orderform
