import React from 'react';
import './Board.css'
import Box from './Box'

const Board = ({board, onClick, playerX, playerO}) => {
    return (
        <div className='box-container'>
            {
                board.map((value, index) => (
                    <Box
                        value={value}
                        key={index}
                        onClick={() => onClick(index)}
                    />
                ))
            }
            <div className="blue-player">
                <div className="blue"></div>
                <p className='player'>{playerX}</p>
            </div>
            <div className="pink-player">
                <div className="pink"></div>
                <p className='player'>{playerO}</p>
            </div>
        </div>
    );
};

export default Board;