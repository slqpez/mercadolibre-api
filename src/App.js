import "./App.css";
import productsService from "./services/products.service.js"
import sellerService from "./services/seller.service.js"
import {useState, useEffect} from 'react'

function App() {
  const [searchValue, setSearchValue] =useState('')
  const [productToSearch, setProductToSearch] =useState('')
  const [products, setProducts] = useState([])
  const [nickname, setNickName] = useState("")


  const handleOnChangeSearch = (e)=>{
    setSearchValue(e.target.value)
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setProductToSearch(searchValue)
  }

   useEffect(()=>{
    sellerService.getSellerNick(78429260).then(result =>{
      setNickName(result.data.nickname) 
    })
  },[]) 

  console.log(nickname)

   useEffect(() => {
    productsService.getProducts(productToSearch)
    .then(result => {
      console.log(result.data.results)
      setProducts(result.data.results)
    })
  },[productToSearch]) 


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
         {/*  <p>{sellerService.getSellerNick(product.seller.id).then(result=>{
           return result.data.nickname
         })}</p>  */}
         
      </div>
      )  
    })}
    </div>
  );

}

export default App;
