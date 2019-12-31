import axios from './axios';
// 用户登记
export const login = (data?:any) => {
    return axios.post('/users',data);
}
