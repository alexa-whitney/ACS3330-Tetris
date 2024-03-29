import React from 'react'
import GridSquare from './GridSquare'

import { useSelector } from 'react-redux'
import { shapes } from '../utils'

// Draws the "next" block view showing the next block to drop
export default function NextBlock() {
	// Get the next block
	const nextShape = useSelector(state => state.nextShape)
	const block = shapes[nextShape][0] // Get the first rotation

  // Map the block to the grid
  const grid = block.map((rowArray, row) => {
    return rowArray.map((square, col) => {
			// If square variable is truthy, then the color is the nextShape, otherwise it's 0
      return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape}/>
    })
  })
  
  return (
    <div className="next-block">
      {grid}
    </div>
  )
}