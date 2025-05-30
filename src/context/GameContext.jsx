import { createContext, useContext, useEffect, useState } from "react";

const GameContext = createContext();

const getInitialBoard = () => {
    try {
        const savedGame = JSON.parse(localStorage.getItem("tic-tac-toe"));
        return Array.isArray(savedGame?.board) ? savedGame.board : Array(9).fill(null);
    } catch {
        return Array(9).fill(null);
    }
};

const getInitialTurn = () => {
    try {
        const savedGame = JSON.parse(localStorage.getItem("tic-tac-toe"));
        return typeof savedGame?.isXTurn === "boolean" ? savedGame.isXTurn : true;
    } catch {
        return true;
    }
};

const getInitialWinner = () => {
    try {
        const savedGame = JSON.parse(localStorage.getItem("tic-tac-toe"));
        return savedGame?.winner || null;
    } catch {
        return null;
    }
};

const getInitialMode = () => {
    try {
        const savedGame = JSON.parse(localStorage.getItem("tic-tac-toe"));
        const validModes = ["easy", "medium", "hard"];
        return validModes.includes(savedGame?.mode) ? savedGame.mode : "easy";
    } catch {
        return "easy";
    }
};

export const GameProvider = ({children}) => {

    const [board, setBoard] = useState(getInitialBoard);
    const [isXTurn, setIsXTurn] = useState(getInitialTurn);
    const [winner, setWinner] = useState(getInitialWinner);
    const [mode, setMode] = useState(getInitialMode);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const gameData = {board, isXTurn, mode, winner}
        localStorage.setItem("tic-tac-toe", JSON.stringify(gameData))
    }, [board, isXTurn, winner, mode])

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
    }

    return(
        <GameContext.Provider value={{board, setBoard, isXTurn, setIsXTurn, winner, setWinner, resetGame, mode, setMode, loading, setLoading}}>
            {children}
        </GameContext.Provider>
    )
} 

export const useGame = () => useContext(GameContext)