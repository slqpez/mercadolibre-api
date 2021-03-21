import "./App.css";
import productsService from "./services/products.service.js";
import sellerService from "./services/seller.service.js";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import ButtonsPag from "./components/ButtonsPag/ButtonsPag";
import Footer from "./components/Footer/Footer";

function App() {
  const initialBtnValues = {
    value1: 1,
    value2: 2,
    value3: 3,
  };

  const [searchValue, setSearchValue] = useState("");
  const [productToSearch, setProductToSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [producstRandom, setProductsRandom] = useState([]);
  const [btnValues, setBtnValues] = useState(initialBtnValues);
  const [offset, setOffset] = useState(0);

  const handleOnChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductToSearch(searchValue);
    setSearchValue("");
    setSubmited(true);
  };

  const handleBtn1 = (e) => {
    e.preventDefault();
    let value= parseInt(e.target.innerHTML)
    setOffset(value*50)
  };

  const handleBtn2 = (e) => {
    e.preventDefault();
    let value= parseInt(e.target.innerHTML)
    setOffset(value*50)
  };

  const handleBtn3 = (e) => {
    e.preventDefault();
    let value= parseInt(e.target.innerHTML)
    setOffset(value*50)
  };

  const handleNext = (e) => {
    e.preventDefault();
    setOffset((btnValues.value3 + 1)*50)
    const newValues={
      value1: btnValues.value1 + 1,
      value2: btnValues.value2 + 1,
      value3: btnValues.value3 + 1
    }
    setBtnValues(newValues)
  };

  console.log(offset)
  useEffect(() => {
    productsService.getProductsByName("oferta", offset).then((result) => {
      setProductsRandom(result.data.results);
    });
  }, [offset]);

  useEffect(() => {
    productsService
      .getProductsByName(productToSearch, offset)
      .then((result) => {
        let resultProducts = result.data.results;
        setProducts(
          resultProducts.map((product) => {
            sellerService.getSellerNick(product.seller.id).then((result) => {
              product.seller.id = result.data.nickname; //TODO El nickname aparace después del segundo re-render.
            });
            return product;
          })
        );
      })
      .catch((error) => console.log("Cojí el error", error)); //TODO mostar un mensaje si no se encunetran elementos.
  }, [productToSearch, offset]);

  console.log(offset)

  return (
    <div className="App">
      <Header
        className="header"
        handleSubmit={handleSubmit}
        handleOnChangeSearch={handleOnChangeSearch}
        searchValue={searchValue}
      ></Header>

      <div className="grid-cards">
        {!submited
          ? producstRandom.map((product) => (
              <Card
                key={product.id}
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                seller={product.seller.id}
              ></Card>
            ))
          : products.map((product) => (
              <Card
                key={product.id}
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                seller={product.seller.id}
              ></Card>
            ))}
      </div>
      <ButtonsPag
        value1={btnValues.value1}
        value2={btnValues.value2}
        value3={btnValues.value3}
        handleBtn1={handleBtn1}
        handleBtn2={handleBtn2}
        handleBtn3={handleBtn3}
        handleNext={handleNext}
      ></ButtonsPag>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
