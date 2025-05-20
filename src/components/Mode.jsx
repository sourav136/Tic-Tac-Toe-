import React from 'react';
import './Mode.css'
import { Link } from 'react-router-dom';
import Bot from '../assets/images/robot-solid.svg'
import Human from '../assets/images/user-solid.svg'

const Mode = () => {
    return (
        <div className='mode'>
            <h1 className='mode-heading'>Select Mode</h1>
            <Link className='mode-link mb-4' to="/human">
                Human <img className='mode-icon' src={Human} alt="Human Icon" /> VS Human <img className='mode-icon' src={Human} alt="Human Icon" />
            </Link>
            <Link className='mode-link' to="/bot">
                Human <img className='mode-icon' src={Human} alt="Human Icon" /> VS Bot <img className='mode-icon' src={Bot} alt="" />
            </Link>
        </div>
    );
};

export default Mode;