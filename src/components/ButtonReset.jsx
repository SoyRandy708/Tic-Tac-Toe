export const ButtonReset = ({ resetGame }) => {
  const handleClick = () => {
    resetGame()
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 p-3 bg-custom-button text-base rounded-lg duration-200 hover:scale-110 hover:bg-custom-hover"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
      </svg>
      Empezar denuevo
    </button>
  )
}
