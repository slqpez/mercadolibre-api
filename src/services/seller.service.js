import axios from 'axios'



const getSellerNick =(id)=>{
   return  axios.get(`https://api.mercadolibre.com/users/${id}`)
}

export default {getSellerNick}