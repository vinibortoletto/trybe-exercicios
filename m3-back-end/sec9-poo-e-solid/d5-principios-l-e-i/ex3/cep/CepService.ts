// ./CepService.ts
import FooCepAPI from './FooCepAPI';
import ICepAPI from './interfaces/ICepAPI';

class CepService implements ICepAPI {
  constructor(private readonly cepApi: ICepAPI) {}

  getAddressByCep(cep: string, number: number) {
    return this.cepApi.getAddressByCep(cep, number);
  }

  getCepByAddress(address: string, number: number) {
    return this.cepApi.getCepByAddress(address, number);
  }
}

export default CepService;