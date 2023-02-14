export default abstract class Character {
  constructor() {}
  
  abstract talk():void
  abstract specialMove():void

  static characterPresentation(character: Character):void {
    character.talk()
    character.specialMove()
  }
}