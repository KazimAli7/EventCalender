import axios from 'axios';

export const USER_API = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('result come here', result);
};

export const SET_USER = async () => true;