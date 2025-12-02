import axios from "axios";

export const emiApi2 = axios.create({
    baseURL: "http://192.168.100.51:3000"
});