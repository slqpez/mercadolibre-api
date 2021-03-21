import React from 'react'
import logo  from "./logo.png"
import text  from "./text.png"
import "./Header.css"
import Form from "../Form/Form"

const Header=({handleSubmit, handleOnChangeSearch, searchValue})=> {
    return (
        <div className="header">
            <div className="brand">
                <img className="logo" src={logo}  alt="logo"></img>
                <img src={text} alt="text"></img>
            </div>
            <Form className="form"handleSubmit={handleSubmit} handleOnChangeSearch={handleOnChangeSearch} searchValue={searchValue}></Form>
        </div>
    )
}

export default Header
