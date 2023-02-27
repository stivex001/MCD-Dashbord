import axios from 'axios'

const BASE_URL = "https://adminapi.mcd.5starcompany.com.ng/api/v1"



export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    // headers: {token: `Bearer ${TOKEN}`}
})