import React from 'react';
import './DropdownModeSelector.css'
import { useGame } from '../context/GameContext';

const DropdownModeSelector = () => {
    const {mode, setMode, resetGame} = useGame();

    const handleModeChange = (e)=>{
        setMode(e.target.value);

        resetGame();
    }

    return (
        <>
            <div className="dropdown-container">
                <label className='mode-head' htmlFor="mode-select">
                    Difficulty: 
                </label>
                <select 
                id="mode-select" 
                value={mode}
                onChange={handleModeChange}
                >
                    <option className='dropdown-item' value="easy">Easy</option>
                    <option className='dropdown-item' value="medium">Medium</option>
                    <option className='dropdown-item' value="hard">Hard</option>
                </select>
            </div>
        </>
    );
};

export default DropdownModeSelector;