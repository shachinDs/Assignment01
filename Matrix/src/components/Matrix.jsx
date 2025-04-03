import { useState } from 'react'
import React from 'react'
import './Matrix.css'

const matrix = () => {
    const [matrix, setMatrix] = useState(Array(9).fill(null))
    const [clickOrder, setClickOrder] = useState([]);

    const handleClick = (index) => {
        if (matrix[index] === null) {
            const newMatrix = [...matrix]
            newMatrix[index] = "green"
            setMatrix(newMatrix)
            setClickOrder([...clickOrder, index])

            if(clickOrder.length === 8) {
                setTimeout(() => {
                    const newMatrixOrange = Array(9).fill("orange")
                    setMatrix(newMatrixOrange)
                })
            }
        }
    }
  return (
    <div className='matrix' >
        {matrix.map((color, index) => (
            <div key={index} className='box' style={{background: color}}
            onClick={() => handleClick(index)} />
        ))}

    </div>
  )
}

export default matrix