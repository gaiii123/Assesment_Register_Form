import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('User registered successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Re-throw the error for further handling
  }
};

export default registerUser;