import React, { useState } from 'react';

const ChessBoard = () => {
  const boardSize = 8; // Size of the chess board
  const squareSize = 50; // Size of each square in pixels
  const [pieces, setPieces] = useState({
    'A2': '♙', 'B2': '♙', 'C2': '♙', 'D2': '♙', 'E2': '♙', 'F2': '♙', 'G2': '♙', 'H2': '♙',
    'A7': '♟', 'B7': '♟', 'C7': '♟', 'D7': '♟', 'E7': '♟', 'F7': '♟', 'G7': '♟', 'H7': '♟',
    'A1': '♖', 'H1': '♖',
    'B1': '♘', 'G1': '♘',
    'C1': '♗', 'F1': '♗',
    'D1': '♕', 'E1': '♔',
    'A8': '♜', 'H8': '♜',
    'B8': '♞', 'G8': '♞',
    'C8': '♝', 'F8': '♝',
    'D8': '♛', 'E8': '♚',
  });

  const [currentPlayer, setCurrentPlayer] = useState('white');
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [originSquare, setOriginSquare] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [moves, setMoves] = useState([]);
  const handleDragStart = (event, piece, square) => {
    setSelectedPiece(piece);
    setOriginSquare(square);
    setDragging(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, square) => {
    event.preventDefault();
    
    // Check if it's the correct player's turn
    if (pieces[originSquare][0] !== currentPlayer[0]) {
      // It's not the current player's turn, so return early
      return;
    }
  
    setPieces((prevPieces) => {
      const newPieces = { ...prevPieces };
      delete newPieces[originSquare];
      newPieces[square] = selectedPiece;
      return newPieces;
    });
  
    // Create a string representing the move (e.g., "Pawn from A2 to A4")
    const move = `${selectedPiece} from ${originSquare} to ${square}`;
  
    // Add the move to the moves array
    setMoves((prevMoves) => [...prevMoves, move]);
  
    // Toggle the current player's turn
    setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
  
    setSelectedPiece(null);
    setOriginSquare(null);
    setDragging(false);
  };
  
  

  const handleFlipBoard = () => {
    setFlipped(!flipped);
  };

  const renderSquare = (row, col) => {
    const flippedRow = flipped ? 7 - row : row;
    const flippedCol = flipped ? 7 - col : col;

    const squareColor = (flippedRow + flippedCol) % 2 === 0 ? 'white' : 'gray';
    const squareStyle = {
      backgroundColor: squareColor,
      width: squareSize,
      height: squareSize,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      fontWeight: 'bold',
      cursor: 'pointer',
    };

    const square = `${String.fromCharCode(65 + flippedCol)}${8 - flippedRow}`;
    const piece = pieces[square];

    const handleDrag = (event) => {
      handleDragStart(event, piece, square);
    };

    return (
      <div
        key={`${row}-${col}`}
        style={squareStyle}
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, square)}
      >
        {piece && (
          <div
            draggable={!dragging || square === originSquare}
            onDragStart={handleDrag}
          >
            {piece}
          </div>
        )}
      </div>
    );
  };

  const renderBoard = () => {
    const squares = [];

    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        squares.push(renderSquare(row, col));
      }
    }

    return squares;
  };

  return (
    <div>
<div>
  <div style={{ display: 'flex', flexWrap: 'wrap', width: boardSize * squareSize }}>{renderBoard()}</div>
  <button onClick={handleFlipBoard}>Flip Board</button>
  <ul>
    {moves.map((move, index) => (
      <li key={index}>{move}</li>
    ))}
  </ul>
</div>
      
    </div>
  );
};

export default ChessBoard;
