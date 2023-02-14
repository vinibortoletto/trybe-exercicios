import Character from "./Character";
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";

const jinx = new LongRangeCharacter('Jinx', 'SUPER MEGA DEATH ROCKET!')
const vi = new MeleeCharacter('Vi', 'CEASE AND DESIST')

// jinx.talk()
// jinx.specialMove()

// vi.talk()
// vi.specialMove()

Character.characterPresentation(jinx)
Character.characterPresentation(vi)

