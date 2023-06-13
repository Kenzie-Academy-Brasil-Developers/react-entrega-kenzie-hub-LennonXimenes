import axios from "axios";

function createApi() {
    return axios.create({
        baseURL: "https://kenziehub.herokuapp.com"
    })
}

export const api = createApi();