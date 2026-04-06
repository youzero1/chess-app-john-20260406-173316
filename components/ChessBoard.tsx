import React from 'react'

const ChessBoard: React.FC = () => {
  const renderSquare = (i: number, j: number) => {
    const isLight = (i + j) % 2 === 0
    const squareColor = isLight ? 'bg-amber-100' : 'bg-amber-800'
    
    return (
      <div
        key={`${i}-${j}`}
        className={`w-12 h-12 ${squareColor} flex items-center justify-center relative`}
      >
        {renderPiece(i, j)}
      </div>
    )
  }

  const renderPiece = (i: number, j: number) => {
    const pieces: { [key: string]: string } = {
      '0-0': '♜', '0-1': '♞', '0-2': '♝', '0-3': '♛', '0-4': '♚', '0-5': '♝', '0-6': '♞', '0-7': '♜',
      '1-0': '♟', '1-1': '♟', '1-2': '♟', '1-3': '♟', '1-4': '♟', '1-5': '♟', '1-6': '♟', '1-7': '♟',
      '6-0': '♙', '6-1': '♙', '6-2': '♙', '6-3': '♙', '6-4': '♙', '6-5': '♙', '6-6': '♙', '6-7': '♙',
      '7-0': '♖', '7-1': '♘', '7-2': '♗', '7-3': '♕', '7-4': '♔', '7-5': '♗', '7-6': '♘', '7-7': '♖'
    }
    
    const piece = pieces[`${i}-${j}`]
    if (!piece) return null
    
    const isWhite = i > 5
    const pieceColor = isWhite ? 'text-white' : 'text-black'
    
    return (
      <span className={`text-4xl ${pieceColor} select-none`}>
        {piece}
      </span>
    )
  }

  const renderBoard = () => {
    const board = []
    for (let i = 0; i < 8; i++) {
      const row = []
      for (let j = 0; j < 8; j++) {
        row.push(renderSquare(i, j))
      }
      board.push(
        <div key={i} className="flex">
          {row}
        </div>
      )
    }
    return board
  }

  return (
    <div className="bg-amber-700 p-4 rounded-lg shadow-2xl">
      <div className="grid grid-cols-8 gap-0 border-4 border-amber-900">
        {renderBoard()}
      </div>
    </div>
  )
}

export default ChessBoard