// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', () => {
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Charmander',
      () => {}
    );
  });

  it('retorna um pokemon que existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});
