import { IAgenda } from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    return {
      protocolo: Quadra.criaProtocolo(),
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis
    }
  }
}
