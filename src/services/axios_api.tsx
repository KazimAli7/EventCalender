import axios from 'axios';

export const USER_API = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result.data;
};

export const SET_USER = async () => true;
