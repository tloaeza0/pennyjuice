import React, { Component } from 'react'

export default class Addbutton extends Component {
    render() {
        const minusButton = document.getElementById('minus');
        const addButton = document.getElementById('add');
        const inputbox = document.getElementById('box');

        minusButton.addEventListener('click', event =>{
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue -1;
        });
        addButton.addEventListener('click', event =>{
            event.preventDefault();
            const currentValue = Number(inputbox.value) || 0;
            inputbox.value = currentValue + 1;
        });
        return (
            <div>
              
            </div>
        )
    }
}




