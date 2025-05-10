import React from 'react';
import "./Home.css"
import Retry from '../images/Vector.png'

const Home = () => {
    return (
        <>
            <div className="home">
                <h1 className='notification'>Your Turn</h1>
                <p className='game-status'>You Win!</p>
                <div className="box-container">
                    <div className="box cross"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box circle"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>

                <button><img src={Retry} alt="Retry icon" className='retry' />Play Again</button>
            </div>
        </>
    );
};

export default Home;