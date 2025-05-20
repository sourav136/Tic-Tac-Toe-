import React from 'react';
import'./Box.css'
const Box = ({value, onClick}) => {

    console.log("this is " + value)
    return (
        <div className='box' onClick={onClick}>
            {value && <span className={value === "X" ? "cross" : "circle"}></span>}
        </div>
    );
};

export default Box;