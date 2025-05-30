import React from 'react';
import './LoadingPage.css'
import Logo from '../assets/images/Logo.svg'
import Logo1 from '../assets/images/Logo (1).svg'
import { useTheme } from '../context/ThemeContext';

const LoadingPage = () => {

    const {theme} = useTheme();

    return (
        <div className='loading'>
            <img src={theme==="dark" ? Logo1 : Logo } alt="Logo" className='loading-page-logo' />
        </div>
    );
};

export default LoadingPage;