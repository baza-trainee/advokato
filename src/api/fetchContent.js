import axios from 'axios';

const { VITE_VERCEL_PATH_TO_SERVER } = import.meta.env;
axios.defaults.baseURL = VITE_VERCEL_PATH_TO_SERVER;

export const getContent = async path => {
  return await axios
    .get(path)
    .then(response => {
      return response.data;
    })
    .catch(error => {});
};

export const postContent = async (path, data) => {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const dataString = JSON.stringify(data);

  return await axios
    .post(path, dataString, params)
    .then(response => {
      return response.data;
    })
    .catch(error => {});
};
