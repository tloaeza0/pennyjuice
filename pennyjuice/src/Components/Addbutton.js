import React from 'react'

class Addbutton extends React.Component {
    render() {
        const inputbox = document.getElementById('box');
        

        const minusValue = (event) => {
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue - 1;
            
        }

        const addValue = (event) => {
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue + 1;
        }    
    

    
        return (
            <div>
                <button id="minus" onClick={minusValue} > - </button>
                <input type="number" defaultValue="0" id='box' />
                <button id="add" onClick={addValue}> + </button>
            </div>
          
        )
    }
};

export default Addbutton;

