import { WINNER_MOVES } from "../constants"

export const checkWinner = (boardToCheck) => {
  for (const moves of WINNER_MOVES) {
    const [a, b, c] = moves

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}

export const saveGameStorage = ({ board, turn }) => {
  localStorage.setItem("board", JSON.stringify(board))
  localStorage.setItem("turn", JSON.stringify(turn))
}

export const resetGameStorage = () => {
  localStorage.removeItem("board")
  localStorage.removeItem("turn")
}