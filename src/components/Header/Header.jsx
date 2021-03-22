import React from 'react'
import logo  from "./logo.png"
import text  from "./text.png"
import "./Header.css"
import Form from "../Form/Form"
import {Link} from 'react-router-dom'

const Header=({handleSubmit, handleOnChangeSearch, searchValue})=> {
    return (
        <div id="header" className="header">
            <Link to="/" className="brand">
                <img className="logo" src={logo}  alt="logo"></img>
                <img className="textBrand" src={text} alt="text"></img>
            </Link>
            <Form className="form"handleSubmit={handleSubmit} handleOnChangeSearch={handleOnChangeSearch} searchValue={searchValue}></Form>
        </div>
    )
}

export default Header
