export const Square = ({ children, index, isSelected, updateBoard }) => {
  const className = `${isSelected ? "bg-blue-800" : "bg-[#222]"}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div
      onClick={handleClick}
      className={`grid place-content-center w-20 h-20 text-4xl cursor-pointer text-white ${className}`}
    >
      {children}
    </div>

  )
}