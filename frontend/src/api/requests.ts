import axios, { AxiosResponse } from 'axios';
import SalesPageable from '../models/SalesPageable';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL ?? 'https://dsmeta-ifabriciorodrigues.herokuapp.com/';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
  new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms))

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
  delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody),
}

export const Sales = {
  getAll: (minDate: string, maxDate:string): Promise<SalesPageable> => requests.get(`/sales?minDate=${minDate}&maxDate=${maxDate}`),
  notify: (id: string) => requests.get(`/sales/notify/${id}`)
}
