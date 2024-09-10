import { useState } from "react";
import '../index.css';
import '../App.css';

export function Counter(){

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    function handleMinus(e){
        console.log(`Minus ${e.type}`);
        const newCount = count - 1;
        // counter cannot be negative
        setCount((newCount>=0) ? newCount : 0);
        console.log(`new count ${newCount}`);
        if(newCount < 0){
            setMessage("Number cannot be negative.");
        }
        else {
            setMessage("minus");
        }                
    }

    function handleAdd(e){
        console.log(`Add ${e.type}`);
        // update counter
        const newCount = count + 1;
        //setCount((c)=>{return(c+1)});
        setCount(newCount);
        // update message
        setMessage("plus");
    }

    function handleReset(e){
        console.log(`Reset ${e.type}`);
                setCount(0);
    }


    return(
        <>
        <p>
        <button
            onClick={(e) => 
                {handleMinus(e)}}>
            -
        </button>
        <span>{count}</span>
        <button
            onClick={(e) => 
                {handleAdd(e)}}
        >
            +
        </button>
        </p>
        <p>Message: {message}</p>
        <p>
        <button
            onClick={(e) => 
                {handleReset(e)}}
        >
            Reset
        </button>
        </p>
        </>
    )
}