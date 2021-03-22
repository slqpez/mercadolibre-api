import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import App from "./App"
import Item  from "./components/Item/Item"
const Main = () => {

   
    
    return (
        <BrowserRouter>
            <Route exact path="/"><App></App></Route>
            <Route  path="/item:id"><Item></Item></Route>
        </BrowserRouter>
    )}

export default Main
