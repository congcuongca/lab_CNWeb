import './style.css'
import { useState } from "react"

function Square({value, onClick}){
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    );
}

export default Square