import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burgergr.firebaseio.com/'
});


export default instance;
     