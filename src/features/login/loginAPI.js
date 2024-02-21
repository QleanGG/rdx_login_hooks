import axios from 'axios';

const MY_SERVER = 'http://127.0.0.1:8000/login';

export const fetchLogin = async(payload) => {
    const response = await axios.post(MY_SERVER, payload);
    return response;   
}
