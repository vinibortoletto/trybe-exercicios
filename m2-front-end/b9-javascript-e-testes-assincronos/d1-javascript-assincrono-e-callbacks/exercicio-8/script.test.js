// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    const handleError = (error, message) => {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    };

    getPokemonDetails('wrongPokemon', handleError);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedMessage =
      'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grama e a habilidade principal dele é Raio Solar';

    const handleSuccess = (error, message) => {
      try {
        expect(message).toEqual(expectedMessage);
        done();
      } catch (error) {
        done(error);
      }
    };

    getPokemonDetails('Bulbasaur', handleSuccess);
  });
});
