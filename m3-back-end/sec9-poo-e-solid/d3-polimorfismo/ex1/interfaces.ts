export interface Character {
  name:string
  specialMove: string
}

export interface DbCharacter extends Character {
  id:number
}

const db: DbCharacter[] = []

interface IModel {
  create(character: Character): Promise<DbCharacter>
  update(id: number, character: Character): Promise<DbCharacter>
  delete(id: number): Promise<boolean>
  getAll(): Promise<DbCharacter[]>
  getById(id: number): Promise<DbCharacter>
}

class LocalDbModel implements IModel {
  async create(character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[length - 1].id : 0
    const newCharacter = {id: lastId + 1, ...character}
    db.push(newCharacter)
    return newCharacter
  }

  async update(id: number, character: Character): Promise<DbCharacter> {
    const indexToUpdate = db.findIndex(character => character.id === id)
    db[indexToUpdate] = {...db[indexToUpdate], ...character}
    return db[indexToUpdate]
  }

  async delete(id: number): Promise<boolean> {
    const indexToDelete = db.findIndex(character => character.id === id)
    const deletedItem = db.splice(indexToDelete, 1)
    return deletedItem.length > 0
  }

  async getAll(): Promise<DbCharacter[]> {
      return [...db]
  }

  async getById(id: number): Promise<DbCharacter> {
    const indexToGet = db.findIndex(character => character.id === id)
    return db[indexToGet]
  }
}

class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character)
    return ({status: 201, data: newCharacter})
  }

  async getAll() {
    const characters = await this.model.getAll()
    return ({status: 201, data: characters})
  }
}

class MockedDbModel implements IModel {
  async create(character: Character): Promise<DbCharacter> {
      console.log('character created');
      return {id: 1, name: 'Miss Fortune', specialMove: 'I do not know'}
  }
}