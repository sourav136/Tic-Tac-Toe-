import React, { useState } from 'react';
import "./Home.css"
import Retry from '../images/Vector.png'

const Home = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true)

    const hendleClick = (index) =>{
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O'
        setBoard(newBoard);
        setIsXTurn(!isXTurn)
        console.log("clicked", index)
    }

    return (
        <>
            <div className="home">
                <h1 className='notification'>Your Turn</h1>
                <p className='game-status'>You Win!</p>
                <div className="box-container">
                    {
                        board.map((value, index) => (
                            <div className="box" key={index} onClick={() => hendleClick(index)}>
                                {value && <span className={value === "X" ? "cross" : "circle"}></span>}
                            </div>
                        ))
                    }
                </div>

                <button><img src={Retry} alt="Retry icon" className='retry' />Play Again</button>
            </div>
        </>
    );
};

export default Home;