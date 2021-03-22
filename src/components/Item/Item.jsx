import React from 'react'
import Card from "../Card/Card"
import Header from "../Header/Header"
import {useEffect, useState} from 'react'
import productsService  from "../../services/products.service"

import "./Item.css"
const Item=()=> {
    const [product, setProduct] = useState({})
    useEffect(()=>{
        productsService.getProductById()
        .then(result=> setProduct(result.data))
    },[])
    return (
        <div>
        <Header></Header>
            <Card img={product.thumbnail} title={product.title} price={product.price} seller={product.seller_id}></Card>
        </div>
    )
}

export default Item
