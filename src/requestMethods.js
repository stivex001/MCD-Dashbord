import axios from 'axios'

const BASE_URL = "https://adminapi.mcd.5starcompany.com.ng/api/v1"
const TOKEN= "1387889|3a5sg56RsqZd6myOQ0IUh4RsU8ehCYHpLuTtObWo"

console.log(localStorage.getItem("persist:root"));


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})