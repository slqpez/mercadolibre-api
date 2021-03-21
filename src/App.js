import "./App.css";
import productsService from "./services/products.service.js"
import sellerService from "./services/seller.service.js"
import {useState, useEffect} from 'react'
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import ButtonsPag from "./components/ButtonsPag/ButtonsPag"
import Footer from "./components/Footer/Footer"


  function App() {
  const [searchValue, setSearchValue] =useState('')
  const [productToSearch, setProductToSearch] =useState('')
  const [products, setProducts] = useState([])
  const [nick, setNick] = useState([])
  const [clicked, setClicked] = useState(false)


  const handleOnChangeSearch = (e)=>{
    setSearchValue(e.target.value)
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setProductToSearch(searchValue)
    setSearchValue("")
    setClicked(true)
  }
  
    useEffect(() => {
    productsService.getProducts(productToSearch)
    .then( result => {
      let resultProducts = result.data.results
      setProducts (resultProducts.map( product=> {
       sellerService.getSellerNick(product.seller.id)
      .then( result=>{
        product.seller.id =  result.data.nickname  //TODO El nickname aparace después del segundo re-render.
      })
      return product
     }))
    
    }).catch(error=> console.log("Cojí el error", error))  //TODO mostar un mensaje si no se encunetran elementos.
  },[productToSearch]) 


  //products.forEach(product => console.log(product.seller.id))
 
 
    
  return (
    <div className="App">
      <Header className="header" handleSubmit={handleSubmit} handleOnChangeSearch={handleOnChangeSearch} searchValue={searchValue}></Header>
     
      <div className="grid-cards">
      {products.map(product=>  <Card key={product.id} img={product.thumbnail} title={product.title} price={product.price} seller={product.seller.id}></Card>)}
      </div>
      {clicked?<ButtonsPag></ButtonsPag>:null}
      <Footer className="footer"></Footer>

    </div>
  );

}

export default App;
