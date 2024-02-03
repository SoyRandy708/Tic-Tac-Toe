import { ButtonReset } from "./ButtonReset"

export const Modal = ({ winner, resetGame }) => {
  if (winner === null) return

  const mensaje = winner ? `El ganador es ${winner}` : "Empate"

  return (
    <section className="absolute grid place-content-center justify-items-center h-2/5 min-w-60 w-3/4 p-4 max-w-96 bg-gradient-to-r from-custom-two to-custom-three rounded-lg">
      <p className="mb-20 text-2xl text-center text-pretty">
        {
          mensaje
        }
      </p>

      <ButtonReset resetGame={resetGame} />
    </section>
  )
}