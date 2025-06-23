import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export default registerUser;
