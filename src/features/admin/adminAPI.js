import axios from 'axios';


const MY_SERVER = 'http://127.0.0.1:8000/products/';

const accessToken = localStorage.getItem('accessToken');

export const addProduct = async (payload) => {
    // console.log(accessToken, payload);
    try {
    const response = await axios.post(MY_SERVER, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    return response;
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or display a user-friendly message
    console.error('Error adding product:', error);
    throw error;
  }
};

export async function loadProds() {
  return await axios.get(`${MY_SERVER}/getImages`)
}

export const delProduct = async (id) => {
  try {
  const response = await axios.delete(MY_SERVER+id, {
    headers: {
      Authorization: `Bearer ${accessToken}`, 
    },
  });
  return response;
  
} catch (error) {
  // Handle errors appropriately, e.g., log the error or display a user-friendly message
  console.error('Error deleting product:', error);
  throw error;
}
};
