import axios from "axios"



export const httpRequest = axios.create({
    baseURL: "http://15.235.181.48:3001/v1/api/"
})


export interface ResponseInterface {
    status: number,
    data: Array<any> | Object
}