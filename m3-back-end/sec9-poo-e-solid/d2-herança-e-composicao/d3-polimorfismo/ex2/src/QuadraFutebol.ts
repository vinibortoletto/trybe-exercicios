import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol

  public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    return {
      protocolo: Quadra.criaProtocolo(),
      data: horaReserva,
      regras: this.futebolData as unknown as IFutebol
    }
  }
}
