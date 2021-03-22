import React from "react";
import "./Product.css"
const Product = ({ img, title, price, seller, id }) => {

  return (
     <div
      className="card-product"
      data-id={id}
    >
      <img className="img" src={img} alt="Product" loading="lazy"></img>

      <p className="price">
        {Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(price)}
      </p>
      <p className="title">{title}</p>
      <p className="seller">{seller}</p>
     
    </div> 
  
);

  
};

export default Product;
