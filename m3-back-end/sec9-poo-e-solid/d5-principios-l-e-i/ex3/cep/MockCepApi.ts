import ICepAPI from "./interfaces/ICepAPI";

export default class MockCepApi implements ICepAPI {
  async getAddressByCep(cep: string, number: number): Promise<string> {
      return ''
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
      return ''
  }
}
