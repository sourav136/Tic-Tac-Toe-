import React from 'react';
import './Head.css'
import ThemeToggler from './ThemeToggler';
import Back from './Back';

const Head = () => {
    return (
        <div className='haed'>
            <div className="container h-100 d-flex align-items-center justify-content-between">
                <ThemeToggler/>
                <Back/>
            </div>
        </div>
    );
};

export default Head;