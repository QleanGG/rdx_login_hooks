import axios from "axios";

const MY_SERVER = 'http://127.0.0.1:8000'

export async function loadProds() {
    return await axios.get(`${MY_SERVER}/getImages`)
}