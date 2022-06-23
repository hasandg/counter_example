import React from 'react';

function CounterButtons({count,setCount}) {
    return (
        <>
            <button onClick={()=> setCount(count-1)}>Azalt (-)</button>
            <button onClick={()=> setCount(count+1)}>Artır (+)</button>
        </>
    );
}

export default CounterButtons;