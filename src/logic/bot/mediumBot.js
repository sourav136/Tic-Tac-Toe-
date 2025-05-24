import {winningPattern} from '../logic'

const findBestMove = (board, player) => {
    for (let combo of winningPattern){
        const [a, b, c] = combo;
        const values = [board[a], board[b], board[c]]

        const playerMoves = values.filter(val => val===player).length;
        const emptyBoxes = combo.filter(idx => board[idx] === null)

        if (playerMoves===2 && emptyBoxes.length===1){
            return emptyBoxes[0]
        }
    }
    return null;
};

export const mediumBot = (board) =>{
    const winMove = findBestMove(board, "O");
    if (winMove !== null) return winMove;

    const blockMove = findBestMove(board, "X");
    if (blockMove !== null) return blockMove;

    const emptyBoxes = board
                        .map((val, i) => val === null? i : null)
                        .filter(val => val !== null)
    
    const randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]
    return randomIndex;
}

