import React from 'react'
import "./Form.css"

const Form=({handleSubmit, handleOnChangeSearch, searchValue})=> {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input className="searchInput" type="search" onChange={handleOnChangeSearch} value={searchValue} placeholder="Busca tu producto..."></input>
                <button className="btn-search">🔍</button>
             </form>
        </div>
    )
}

export default Form
