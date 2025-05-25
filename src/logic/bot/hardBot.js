import { checkWinner } from "../logic"

export const hardBot = (board) =>{
    const bot = "O"
    const human = "X"

    const minimax = (board, isMaximizing) => {
        const winner = checkWinner(board)

        if (winner===bot) return +1
        if (winner === human) return -1
        if (!board.includes(null)) return 0

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i=0; i<board.length; i++){
                if (board[i] === null){
                    board[i] = bot;
                    const score = minimax(board, false);
                    board[i] = null;
                    bestScore = Math.max(score, bestScore)
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i=0; i<board.length; i++){
                if (board[i] === null){
                    board[i] = human;
                    const score = minimax(board, true);
                    board[i] = null;
                    bestScore = Math.min(score, bestScore)
                }
            }
            return bestScore;
        }
    };

    let bestMove = null;
    let bestScore = -Infinity;

    for (let i = 0; i<board.length; i++){
        if (board[i] === null){
            board[i] = bot;
            const score = minimax(board, false);
            board[i] = null;

            if (score > bestScore){
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
};