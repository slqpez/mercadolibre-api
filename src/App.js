import "./App.css";
import productsService from "./services/products.service.js"
import sellerService from "./services/seller.service.js"
import {useState, useEffect} from 'react'
import axios from "axios";

  function App() {
  const [searchValue, setSearchValue] =useState('')
  const [productToSearch, setProductToSearch] =useState('')
  const [products, setProducts] = useState([])
  const [idSellers, setIdSellers] = useState([])
  const [nickNames, setNickNames] = useState([])


  const handleOnChangeSearch = (e)=>{
    setSearchValue(e.target.value)
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setProductToSearch(searchValue)
  }
  
    useEffect(() => {
    productsService.getProducts(productToSearch)
    .then(result => {
      let resultProducts = result.data.results
     resultProducts.forEach(product=> sellerService.getSellerNick(product.seller.id)
      .then(result=>{
        const newResult = resultProducts.map(newProduct=>{
          newProduct.seller.id = result.data.nickname 
          return newProduct
        })
         
        setProducts(newResult)
         
      }))    
      
    })
  },[productToSearch]) 
 


  /* products.forEach(product=>{
    console.log(product.seller.id)
  }) */
   /* let ids =products.map(product => product.seller.id) 
    
   useEffect(() => {
    setNickNames(ids.map(async id=>{
      const results = await sellerService.getSellerNick(id)
      const nicks = await results.data.nickname
      return nicks 
    }))
   
  },[ids])  


console.log(nickNames)  */

  return (
    <div className="App">
      <h1>Mercado López</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleOnChangeSearch} value={searchValue}></input>
      </form>
      

    {products.map(product=> {
      return(
        
        <div key={product.id}>
        <img src={product.thumbnail} alt="Product" width="200" height="200" loading="lazy"></img>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.seller.id}</p>
         
       
         
      </div>
      )  
    })}
    </div>
  );

}

export default App;
