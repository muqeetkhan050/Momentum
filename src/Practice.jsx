import React from 'react';
import {useState} from 'react'
function Practice(){

    const [count, setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
    }

    const [text, setText]=useState('Muqeet')

    function name(){
        setText('Muhammad Muqeet khan')
    }

    return (
        <div>
            <h1>this is our practice</h1>
            <button onClick={handleClick}>click on it{count}</button>

            <button onClick={name}><h1>{text}</h1></button>
        </div>
    )
}

export default Practice;
