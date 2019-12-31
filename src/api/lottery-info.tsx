// 抽奖信息
import axios from './axios';
// 最近中奖信息
export const staffsInfo  = (data?: any) => {
    return axios.get('/staffs', data);
}
// 抽奖
export const raffles  = (data?: any) => {
  return axios.post('/raffles', data);
}
export const myStaffsInfo  = (wxId: string) => {
  return axios.get(`/staffs/${wxId}`);
}
