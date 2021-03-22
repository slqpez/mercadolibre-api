import axios from 'axios'



const getProductsByName =(product="oferta", offset=0)=>{
    return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${product}&paging&offset=${offset}`)
}

const getProductById =(id)=>{
    return axios.get(`https://api.mercadolibre.com/items/${id}`)
}


export default {getProductsByName, getProductById};

