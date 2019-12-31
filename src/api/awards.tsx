import axios from './axios';
// 奖品列表
export const getAwards = () => {
    return axios.get('/awards');
}
