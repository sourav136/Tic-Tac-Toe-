import React, { useState } from 'react';
import "./Home.css"
import Retry from '../images/Vector.png'

const Home = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true)
    const [winner, setWinner] = useState(null)

    const winningPattern = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]

    const checkWinner = (board) => {
        for (let combo of winningPattern){
            const [a,b,c] = combo
            if (board[a] && board[a]===board[b] && board[a]===board[c]) {
                return board[a]
            }
        }
        return null;
    }

    const hendleClick = (index) =>{
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O'
        setBoard(newBoard);
        setIsXTurn(!isXTurn)
        console.log("clicked", index)

        const gameWinner = checkWinner(newBoard)
        if (gameWinner){
            setWinner(gameWinner)
        }

        if (!newBoard.includes(null) && !gameWinner){
            setWinner("Draw")
        }
    }

    return (
        <>
            <div className="home">
                <h1 className='notification'>
                    {
                        winner? (winner === "Draw" ? "Oops!!" : "Congratulations!!") : `${isXTurn ? "X" : "O"}'s turn`
                    }
                </h1>
                {
                    winner && (
                        <p className='game-status'>
                            {winner === "Draw" ? "It's a draw.. Try again!" : `${winner} Wins!!!`}
                        </p>

                    )
                }
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