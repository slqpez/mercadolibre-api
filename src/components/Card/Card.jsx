import React from 'react'
import "./Card.css"

const Card=({img,title, price, seller})=> {


    return (
        <div className="card">    
        <img className="img" src={img} alt="Product"  loading="lazy"></img>
        
        <p className="price">{ Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
          }).format(price)}</p>
        <p className="title">{title}</p>
        <p className="seller">{seller}</p>
        </div>
    )
}

export default Card
