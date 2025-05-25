import React, { useEffect } from 'react';
import './Page.css'
import { useGame } from '../context/GameContext';
import { checkWinner } from '../logic/logic';
import Board from '../components/Board';
import ResetButton from './../components/ResetButton';
import { Link } from 'react-router-dom';
import Back from '../assets/images/arrow-left-solid.svg'
import { easyBot } from './../logic/bot/easyBot';
import { mediumBot } from './../logic/bot/mediumBot';
import { hardBot } from './../logic/bot/hardBot';
import DropdownModeSelector from '../components/DropdownModeSelector';

const HumanVSBot = () => {
    const {board, setBoard, isXTurn, setIsXTurn, winner, setWinner, mode} = useGame();

    const human = "X";
    const bot = "O";

    const difficulty = {
        easy: easyBot,
        medium: mediumBot,
        hard: hardBot,
    }

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
        if (winner || isXTurn) return;

        const botLogic = difficulty[mode];
        const botMoveIndex = botLogic(board);

        if (botMoveIndex === undefined || botMoveIndex === null) return;

        setTimeout(() => {
            setBoard(prevBoard => {
                const updatedBoard = [...prevBoard];
                updatedBoard[botMoveIndex] = bot;

                const gameWinner = checkWinner(updatedBoard);

                if (gameWinner) {
                    setWinner(gameWinner);
                } else if (!updatedBoard.includes(null)) {
                    setWinner("Draw");
                } else {
                    setIsXTurn(true);
                }

                return updatedBoard;
            });
        }, 500);
        
    }, [isXTurn, winner, mode, setBoard, board]);



    return (
        <div className='game-page container'>
            <DropdownModeSelector/>
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