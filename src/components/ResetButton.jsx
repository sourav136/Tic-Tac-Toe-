import React from 'react';
import './ResetButton.css'
import {useGame} from '../context/GameContext'
import Retry from '../assets/images/Vector.png'

const ResetButton = () => {
    const {resetGame} = useGame();

    return (
        <>
            <button onClick={resetGame}>
                <img src={Retry} alt="Retry icon" className='retry' />Play Again
            </button>
        </>
    );
};

export default ResetButton;