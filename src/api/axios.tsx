import axios from 'axios';
import qs from 'qs';
import { Toast } from 'antd-mobile'
const instance = axios.create({})
instance.defaults.baseURL = 'https://tnhcjapi.1hykj.com';
instance.defaults.timeout = 600000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // token 验证
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器’
instance.interceptors.response.use(
    response => {
      console.log('response',response)
        return response;
    },
    error => {
      Toast.info(error.response.data.message)
      return Promise.reject(error);
    }
);

export default ({
    post (url:string, data:any = {}, header?:any) {
        let config:any = {};
        header && (config.headers = { 'Content-Type': header });
        return new Promise((resolve, reject) => {
          instance.post(url, !header?qs.stringify(data):data, config)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    get (url:string, params:any = {}) {
        return new Promise((resolve, reject) => {
          instance.get(url, { params })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
});
