import axios from 'axios';

const login = async (email, password) => {
  const response = await axios.post('http://localhost:8081/api/login', { email, password });
  return response.data;
};

export default {
  login,
};