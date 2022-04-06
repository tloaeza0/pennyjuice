import React from 'react'
import Addbutton from './Addbutton'

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

                <input  id = "submitbtn" type = "submit"></input>
              
            </form>
            
            <div className = "productorder">
                
                <div className = "flavors">
                    <h2 className = "flavorh2">Flavors</h2>
                    <div className = "item">
                    <p>Apple</p>
                    </div>
                    
                    <div className = "item">
                    <p>White Grape</p>
                    </div>
                    <div className = "item">
                    <p>Strawberry Banana</p>
                    </div>
                    <div className = "item">
                    <p>Strawberry Kiwi</p>
                    </div>
                    
                    <div className = "item">
                    <p>Citrus Punch</p>
                    </div>
                    <div className = "item">
                    <p>Peach Mango</p>
                    </div>
                    <div className = "item">
                    <p> Blue Raspberry</p>
                    </div>
                    <div className = "item">
                    <p>Green Watermelon</p>
                    </div>
                    <div className = "item">
                    <p>Orange Raspberry</p>
                    </div>
                    <div className = "item">
                    <p>Cran Apple</p>
                    </div>
                    <div className = "item">
                    <p>Orange Pineapple</p>
                    </div>
                    <div className = "item">
                    <p>Berry</p>
                    </div>
                    <div className = "item">
                    <p>Cherry</p>
                    </div>
                    <div className = "item">
                    <p>Fruit Punch</p>
                    </div>
                    <div className = "item">
                    <p>Tangerine</p>
                    </div>
                    
                </div>
                <div className = "itemamount">
                    <h2 className = "amounth2">Amount</h2>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    <div className = "item">
                    <button id = "minus"> - </button>
                    <input type = "number" value = "0" id="box"/>
                    <button id = "add"> + </button>
                    </div>
                    
                </div>
        
                </div>
            </div>
        </div>

    )
}

export default Orderform
