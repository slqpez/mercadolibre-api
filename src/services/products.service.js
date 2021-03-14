import axios from 'axios'



const getProducts =(product="", offset=0)=>{
    return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${product}&paging&offset=${offset}`)
}

export default {getProducts};