import axios from 'axios';

export const getQuotes =  axios.create({
    baseURL: 'https://api.quotable.io'
})