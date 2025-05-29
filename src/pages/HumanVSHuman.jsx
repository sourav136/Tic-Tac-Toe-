import React from 'react';
import './Page.css'
import { useGame } from '../context/GameContext';
import { checkWinner } from '../logic/logic';
import Board from '../components/Board';
import ResetButton from './../components/ResetButton';
import Head from '../components/Head';

const HumanVSHuman = () => {
    const {board, setBoard, isXTurn, setIsXTurn, winner, setWinner, resetGame} = useGame();

    const handleClick = (index) =>{
        if (board[index] || winner) return;

        const newBoard = [...board]
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard)

        const gameWinner = checkWinner(newBoard);
        if (gameWinner){
            setWinner(gameWinner)
        } else if (!newBoard.includes(null)){
            setWinner("Draw")
        } else{
            setIsXTurn(!isXTurn)
        }
    }

    return (
        <>
            <Head/>
            <div className='game-page'>
                <h1 className='notification'>
                    {
                        winner? (winner === "Draw" ? "Oops!!" : "Congratulations!!") : `${isXTurn ? "Player 1" : "Player 2"}'s turn`
                    }
                </h1>
                {
                    winner && (
                        <p className={`game-status ${winner && winner=== "X"? "xwin" : "owin"}`}>
                            {winner === "Draw" ? "It's a draw.. Try again!" : `${winner=== "X" ? "Plater 1" : "Player 2"} Wins!!!`}
                        </p>
                    )
                }
                <Board board={board} onClick={handleClick} playerO={"Player 2"} playerX={"Player 1"}/>
                
                <ResetButton/>

            </div>
        </>
    );
};

export default HumanVSHuman;