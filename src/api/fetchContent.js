import axios from 'axios';

const { VITE_PATH_TO_SERVER } = import.meta.env;
axios.defaults.baseURL = VITE_PATH_TO_SERVER;

export const getContent = async path => {
  return await axios
    .get(path)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log('getContent: ', error);
      // alert('щось пішло не так. Перезавантаж сторінку або зайди пізніше');
    });
};
