import axios from "axios";

function createApi() {
    return axios.create({
        baseURL: "https://kenziehub.herokuapp.com",
        timeout: 8000,
    })
}

export const api = createApi();