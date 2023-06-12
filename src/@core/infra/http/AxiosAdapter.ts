import HttpClient from './HttpClient';
import axios from 'axios';

export default class AxiosAdapter implements HttpClient {
  post(url: string, payload: any): Promise<any> {
    const response = axios.post(url, payload);
    return response;
  }

  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }
}
