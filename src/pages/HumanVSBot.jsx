import React, { useEffect } from 'react';
import './Page.css'
import { useGame } from '../context/GameContext';
import { checkWinner } from '../logic/logic';
import Board from '../components/Board';
import ResetButton from './../components/ResetButton';
import { Link } from 'react-router-dom';
import Back from '../assets/images/arrow-left-solid.svg'

const HumanVSBot = () => {
    const {board, setBoard, isXTurn, setIsXTurn, winner, setWinner, resetGame} = useGame();

    const human = "X";
    const bot = "O";

    const handleClick= (index) => {
        if (board[index] || winner || !isXTurn) return;

        const newBoard = [...board]
        newBoard[index] = human;
        setBoard(newBoard);
        setIsXTurn(false);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner){
            setWinner(gameWinner)
        } else if (!newBoard.includes(null)){
            setWinner("Draw")
        }
    }

    useEffect(() => {
        const makeBotMove = () => {
            if (winner || isXTurn) return;

            const emptyBoxes = board 
                .map((val, i) => val===null ? i : null)
                .filter(val => val!==null);
            
            if (emptyBoxes.length===0) return;

            const randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
            const newBoard = [...board];
            newBoard[randomIndex] = bot;

            setTimeout(()=>{
                setBoard(newBoard);
                const gameWinner = checkWinner(newBoard)
                if (gameWinner){
                    setWinner(gameWinner);
                } else if (!newBoard.includes(null)){
                    setWinner("Draw");
                } else {
                    setIsXTurn(true)
                }
            }, 500);
        }

        makeBotMove();
    }, [board, setBoard, isXTurn, setIsXTurn, winner, setWinner]) 


    return (
        <div className='game-page'>
            <h1 className='notification'>
                {
                    winner? (winner === "Draw" ? "Oops!!" : "Congratulations!!") : `${isXTurn ? "Your turn" : "Bot's turn"}`
                }
            </h1>
            {
                winner && (
                    <p className={`game-status ${winner && winner=== "X"? "xwin" : "owin"}`}>
                        {winner === "Draw" ? "It's a draw.. Try again!" : `${winner=== "X" ? "You Win!!!" : "Bot Wins!!!"}`}
                    </p>
                )
            }
            <Board board={board} onClick={handleClick} playerO={"Bot"} playerX={"You"}/>
            
            <ResetButton/>

            <Link className='back' to="/"><img className='back-icon' src={Back} alt="Back icon" />Back</Link>
        </div>
    );
};

export default HumanVSBot;