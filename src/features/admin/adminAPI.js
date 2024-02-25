import axios from 'axios';


const MY_SERVER = 'http://127.0.0.1:8000/products/';

const accessToken = localStorage.getItem('accessToken');

export const addProduct = async (payload) => {
    console.log(accessToken, payload);
    try {
    console.log(' in the api');
    const response = await axios.post(MY_SERVER, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Add the authorization header
      },
    });

    return response;
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or display a user-friendly message
    console.error('Error adding product:', error);
    throw error;
  }
};
