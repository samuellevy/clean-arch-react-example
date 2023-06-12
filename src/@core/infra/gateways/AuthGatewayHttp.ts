import AuthGateway, { SignInInput, SignInOutput } from './AuthGateway';
import HttpClient from '../http/HttpClient';

export default class AuthGatewayHttp implements AuthGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async signIn({ email, password }: SignInInput): Promise<SignInOutput> {
    const todosData = await this.httpClient.post(`${this.baseUrl}/login`, {
      email,
      password,
    });
    return todosData;
  }

  signOut(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
