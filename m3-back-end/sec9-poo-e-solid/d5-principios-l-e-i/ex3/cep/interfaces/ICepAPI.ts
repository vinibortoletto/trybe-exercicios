export default interface ICepAPI {
  getAddressByCep(cep: string, number: number): Promise<string>
  getCepByAddress(address: string, number: number): Promise<string>
}