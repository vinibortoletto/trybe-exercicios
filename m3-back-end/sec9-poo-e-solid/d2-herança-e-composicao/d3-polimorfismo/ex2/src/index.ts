import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube()
const quadraFutebol = new QuadraFutebol()
const quadraTenis = new QuadraTenis()

clube.adicionarQuadra(quadraFutebol)
const reservaQuadraFutebol = clube.buscarQuadra<QuadraFutebol>(0).reservar(new Date())

clube.adicionarQuadra(quadraTenis)
const reservaQuadraTenis = clube.buscarQuadra<QuadraTenis>(1).reservar(new Date())


console.log(reservaQuadraTenis);
