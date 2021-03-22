import axios from 'axios'



const getProductsByName =(product="oferta", offset=0)=>{
    return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${product}&paging&offset=${offset}`)
}

const getProductById =(id)=>{
    return axios.get(`https://api.mercadolibre.com/items/MCO467792288`)
}


export default {getProductsByName, getProductById};

