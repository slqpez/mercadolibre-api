import React from 'react'
import "./ButtonsPag.css"
const ButtonsPag=({value1, value2,value3, handleBtn1, handleBtn2, handleBtn3, handleNext, handleLast})=> {
    return (
        <div className="buttons">
        <button onClick={handleBtn1}>{value1}</button>
        <button onClick={handleBtn2}>{value2}</button>
        <button onClick={handleBtn3}>{value3}</button>
        <button onClick={handleNext}>Siguiente</button>
        <button onClick={handleLast}>Última página</button>
      </div>
    )
}

export default ButtonsPag
