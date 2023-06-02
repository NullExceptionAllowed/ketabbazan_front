import axios, { Axios } from "axios";
import { baseUrl } from "../Variable";

function GetData(options){
    return axios.get("",options);
}
export function setCommentState(options){
    return axios.post(`${baseUrl}/`,options);
}