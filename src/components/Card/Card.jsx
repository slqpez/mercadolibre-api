import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";



const Card = ({ img, title, price, seller, id, handleCardClick }) => {
  return (
     <Link
      to="./item"
      className="card"
      data-id={id}
      onClick={handleCardClick}
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
     
    </Link> 
  
);

  
};

export default Card;
