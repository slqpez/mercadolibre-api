import React from "react";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import productsService from "../../services/products.service";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import "./Item.css";

const Item = () => {
  let query = window.location.pathname;
  const search = query.split(":");
  const idProduct = search[1];


  const [product, setProduct] = useState({});
  useEffect(() => {
    productsService
      .getProductById(idProduct)
      .then((result) => setProduct(result.data));
  }, [idProduct]);

  console.log(product)
  return (
    <div className="item">
      <Header className="header"></Header>
      <Product
        img={product.thumbnail}
        title={product.title}
        price={product.price}
        seller={product.seller_id}
        attributes={product.attributes}
      ></Product>

      <Footer></Footer>
    </div>
  );
};

export default Item;
