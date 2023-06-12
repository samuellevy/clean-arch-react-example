export default interface HttpClient {
  post(url: string, payload: any): Promise<any>;
}
