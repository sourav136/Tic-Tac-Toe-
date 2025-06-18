import React from 'react';
import './Mode.css'
import { Link } from 'react-router-dom';
import Bot from '../assets/images/robot-solid.svg'
import Human from '../assets/images/user-solid.svg'
import { useTheme } from '../context/ThemeContext';

const Mode = () => {

    const {theme} = useTheme();
    return (
        <div className='mode'>
            <h1 className='mode-heading'>Select Mode</h1>
            <Link className='mode-link mb-4' to="/human">
                Human <img className={`mode-icon ${theme === "dark" ? "dark" : ""}`} src={Human} alt="Human Icon" /> VS <img className={`mode-icon ${theme === "dark" ? "dark" : ""}`} src={Human} alt="Human Icon" /> Human 
            </Link>
            <Link className='mode-link' to="/bot">
                Human <img className={`mode-icon ${theme === "dark" ? "dark" : ""}`} src={Human} alt="Human Icon" /> VS <img className={`mode-icon ${theme === "dark" ? "dark" : ""}`} src={Bot} alt="" /> AI 
            </Link>
        </div>
    );
};

export default Mode;