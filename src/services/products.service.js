import axios from 'axios'



const getProductsByName =(product="oferta", offset=0)=>{
    return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${product}&paging&offset=${offset}`)
}



export default {getProductsByName};

