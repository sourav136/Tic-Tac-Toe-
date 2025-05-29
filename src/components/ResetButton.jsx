import React from 'react';
import './ResetButton.css'
import {useGame} from '../context/GameContext'
import Retry from '../assets/images/Vector.png'
import { useTheme } from '../context/ThemeContext';

const ResetButton = () => {
    const {resetGame} = useGame();
    const {theme} = useTheme();

    return (
        <>
            <button onClick={resetGame}>
                <img src={Retry} alt="Retry icon" className={`retry ${theme === "dark" ? "dark" : ""}`} />Play Again
            </button>
        </>
    );
};

export default ResetButton;