import React from "react";
import "./Product.css";
const Product = ({ img, title, price, seller, id, attributes }) => {
  
  return (
    <div className="card-product" data-id={id}>
      <img className="img-product" src={img} alt="Product" loading="lazy"></img>

      <p className="price">
        {Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(price)}
      </p>
      <p className="title">{title}</p>
      <p className="seller">{seller}</p>
      <hr></hr>
      <div className="attributes">
        <h3>Especificaciones</h3>
        {attributes !== undefined ? (
          attributes.map((attribute) => (
            <p className="attribute" key={attribute.id}>
              
              <span className="name">{attribute.name}: </span>
              <span className="value">{attribute.value_name}</span>
            </p>
          ))
        ) : (
         null
        )}
      </div>
    </div>
  );
};

export default Product;
