import IAirplane from "./interfaces/IAirplane";

export default class Airplane implements IAirplane {
  constructor() {}

  fly(): void {
    console.log('The airplane is flying');
  }
}
