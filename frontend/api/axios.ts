import axios from "axios"



export const httpRequest = axios.create({
    baseURL: "http://localhost:3001/v1/api/"
})


export interface ResponseInterface {
    status: number,
    data: Array<any> | Object
}