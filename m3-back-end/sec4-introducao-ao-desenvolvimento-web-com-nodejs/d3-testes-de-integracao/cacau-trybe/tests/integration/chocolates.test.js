const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

beforeEach(function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(function () {
  sinon.restore();
});

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
  it('Retorna o chocolate Mounds', async function () {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 4,
      name: 'Mounds',
      brandId: 3,
    });
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
    const response = await chai.request(app).get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
  });
});

describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
  it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
    const response = await chai.request(app).get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });

  it('Retorna "Brand not found" quando pesquisar por marca inexistente', async function () {
    const response = await chai.request(app).get('/chocolates/brand/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({
      message: 'Brand not found',
    });
  });
});

describe('Usando o método GET em /chocolates/total para buscar a quantidade de chocolates', function () {
  it('Retorna a quantidade correta de chocolates', async function () {
    const response = await chai.request(app).get('/chocolates/total');
    const output = { totalChocolates: 4 };

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/search para buscar chocolates por nome', function () {
  it('Retorna apenas chocolates que contém "Mo" no nome', async function () {
    const response = await chai.request(app).get('/chocolates/search?name=Mo');
    const output = [
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ];

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Retorna array vazio e status 404 quando não houver chocolates que correspondem à pesquisa', async function () {
    const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

    expect(response).to.have.status(404);
    expect(response.body).to.deep.equal([]);
  });
});

describe('Usando o método PUT em /chocolates/:id para atualizar chocolate', function () {
  it('Retorna chocolate de ID 1 atualizado', async function () {
    const newChocolate = {
      name: 'Mint Pretty Good',
      brandId: 2,
    };

    const output = {
      chocolate: {
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      },
    };

    const response = await chai
      .request(app)
      .put('/chocolates/1')
      .send(newChocolate);

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Retorna erro quando ID passado é inválido', async function () {
    const newChocolate = {
      name: 'Mint Pretty Good',
      brandId: 2,
    };

    const errorMessage = {
      message: 'chocolate not found',
    };

    const response = await chai
      .request(app)
      .put('/chocolates/555')
      .send(newChocolate);

    expect(response).to.have.status(404);
    expect(response.body).to.deep.equal(errorMessage);
  });
});
