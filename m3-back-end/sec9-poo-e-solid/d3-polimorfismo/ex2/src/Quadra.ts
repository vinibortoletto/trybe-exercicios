import { IAgenda } from "./interfaces/IAgenda";

export default abstract class Quadra {
  abstract reservar<T>(horaReserva: Date): IAgenda<T>
  static criaProtocolo(): string {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return protocolo
  }
}