import axios from "axios";

let options = {
    baseURL: 'https://api.sampleapis.com/futurama/'
}

let axiosInstance = axios.create(options);

let getCharacters = () => {
    return axiosInstance.get('/characters');
}

let getInventory = () => {
    return axiosInstance.get('/inventory/');
}


export {
    getCharacters, getInventory,axiosInstance
}