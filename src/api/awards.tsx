import axios from './axios';

export const getAwards = () => {//定义schema
    return axios.get('/awards');
}
