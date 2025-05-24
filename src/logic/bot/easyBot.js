export const easyBot = (board) =>{
    const emptyBoxes = board
                        .map((val, i) => val === null? i : null)
                        .filter((val)=> val !== null)
    
    const randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]
    return randomIndex;
}