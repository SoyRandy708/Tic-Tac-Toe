import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { Modal } from "./components/Modal"
import { TURNS } from "./constants"
import { checkWinner, resetGameStorage, saveGameStorage } from "./lib"

export const App = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem("board")
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem("turn")
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
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


      <Modal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}