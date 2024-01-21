import { useState } from "react"
import { Square } from "./components/Square"
import { Modal } from "./components/Modal"

const TURNS = {
  X: "X",
  O: "O"
}

const WINNER_MOVES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  const checkWinner = (boardToCheck) => {
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

    if (!boardToCheck.includes(null)) {
      return setWinner(false)
    }

    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='grid place-content-center place-items-center gap-12 h-screen'>
      <h1 className="text-4xl">Tic-Tac-Toe</h1>

      <button
        onClick={resetGame}
        className="p-4 bg-[#414e6e]"
      >
        Empezar denuevo
      </button>

      <section className='grid grid-cols-3 gap-2 bg-blue-800'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>

      <section className="flex">
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <Modal
            winner={winner}
            resetGame={resetGame}
          />
        )
      }
    </main>
  )
}