import React from 'react';
import './Back.css'
import { Link } from 'react-router-dom';
import BackIcon from '../assets/images/arrow-left-solid.svg'
import { useTheme } from '../context/ThemeContext';

const Back = () => {

    const {theme} = useTheme();

    return (
        <>
            <Link className='back' to="/"><img src={BackIcon} className={`back-icon ${theme === "dark" ? "dark" : ""}`} alt="" /> Back</Link>  
        </>
    );
};

export default Back;