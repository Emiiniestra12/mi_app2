import axios from "axios";

export const emiApi2 = axios.create({
    baseURL: "http://172.20.10.3:3000"
});

export const emiApi3 = axios.create({
    baseURL: "http://192.168.100.51:3000"
})