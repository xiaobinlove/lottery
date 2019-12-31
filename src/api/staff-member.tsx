// 调试工作人员
import axios from './axios';
// 工作人员登录
export const staffs  = (data?:any) => {
    return axios.post('/staffs',data);
}
// 工作人员兑奖
export const staffsAward  = (data?:any) => {
  return axios.post('/staffs/award',data);
}
