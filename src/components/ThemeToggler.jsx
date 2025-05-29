import React from 'react';
import './ThemeToggler.css'
import Sun from '../assets/images/sun-solid.svg'
import Moon from '../assets/images/moon-solid-fixed.svg'
import { useTheme } from '../context/ThemeContext';

const ThemeToggler = () => {

    const {theme, toggleTheme} = useTheme();
    return (
        <>
            <button 
            className='theme-toggler' 
            onClick={toggleTheme}>
                {theme==="light"? 
                <><img src={Sun} className={`theme-icon ${theme === "dark"? "dark" : ""}`} alt="" /> Light</>
                :
                <><img src={Moon} className={`theme-icon ${theme === "dark"? "dark" : ""}`} alt="" /> Dark</>
                }
            </button>
        </> 
    );
};

export default ThemeToggler;