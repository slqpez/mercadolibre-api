import React from 'react'
import "./ButtonsPag.css"
const ButtonsPag=({value1, value2,value3, handleBtn1, handleBtn2, handleBtn3, handleNext, handleLast, handleBefore,isclicked, limit, count})=> {
    return (
        <div className="buttons">
        {isclicked && value1 > 0 ? <button onClick={handleBefore}>Anterior</button>:null}
        <button onClick={handleBtn1}>{value1}</button>
        <button onClick={handleBtn2}>{value2}</button>
        <button onClick={handleBtn3}>{value3}</button>
        {count<limit && value3 <=20?<button onClick={handleNext}>Siguiente</button>:null}
      </div>
    )
}

export default ButtonsPag
