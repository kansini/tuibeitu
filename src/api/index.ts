import axios from "axios"

const $http = axios.create({
    // @ts-ignore
    baseURL: './data/',
    timeout: 5000,
    // headers: {'Authorization': 'none'}
})

export default $http
