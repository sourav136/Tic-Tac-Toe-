import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [mode, setMode] = useState("easy")

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
    }

    return(
        <GameContext.Provider value={{board, setBoard, isXTurn, setIsXTurn, winner, setWinner, resetGame, mode, setMode}}>
            {children}
        </GameContext.Provider>
    )
} 

export const useGame = () => useContext(GameContext)