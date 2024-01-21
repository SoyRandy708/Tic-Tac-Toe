export const Modal = ({ winner, resetGame }) => {
  const mensaje = winner ? `El ganador es ${winner}` : "Empate"

  return (
    <section className="absolute grid place-content-center h-1/2 min-w-60 w-1/2 bg-[#6374ae]">
      <p className="mb-20 text-2xl text-center">

        {
          mensaje
        }
      </p>

      <button
        onClick={resetGame}
        className="p-4 bg-[#414e6e]"
      >
        Empezar denuevo
      </button>
    </section>
  )
}