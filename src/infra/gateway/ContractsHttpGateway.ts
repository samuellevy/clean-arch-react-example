import { Contract } from '~/domain/entity/Contract';
import ContractGateway from '../../domain/gateway/ContractGateway';
import HttpClient from '../http/HttpClient';
import axios from 'axios';

export default class ContractsHttpGateway implements ContractGateway {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = axios.create();
  }

  save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<Contract[]> {
    const url = 'http://localhost:5173/fakeapi.json';
    const response = await this.httpClient.get(url);
    return response.data;
  }
}
