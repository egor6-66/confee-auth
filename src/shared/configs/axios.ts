import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: `https://api.dev.confee.ru:443/`,
};

const axiosClient = axios.create(config);

export default axiosClient;
