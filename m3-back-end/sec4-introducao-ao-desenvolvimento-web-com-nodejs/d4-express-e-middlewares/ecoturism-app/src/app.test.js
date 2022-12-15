const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('./app');

const { expect } = chai;
chai.use(chaiHttp);

describe('POST /activities', function () {
  it('1. should insert new activity and return success message', async function () {
    const successMessage = { message: 'Atividade cadastrada com sucesso!' };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 5,
        difficulty: 'Fácil',
        createdAt: '10/08/2022',
      },
    };

    const response = await chai
      .request(app)
      .post('/activities')
      .send(newActivityMock);

    expect(response).to.have.status(201);
    expect(response.body).to.deep.equal(successMessage);
  });

  it('2. should return 400 error if name does not exists', async function () {
    const errorMessage = { message: 'O campo name é obrigatório' };

    const newActivityMock = {
      price: 0,
      description: {
        rating: 5,
        difficulty: 'Fácil',
        createdAt: '10/08/2022',
      },
    };

    const response = await chai
      .request(app)
      .post('/activities')
      .send(newActivityMock);

    expect(response).to.have.status(400);
    expect(response.body).to.deep.equal(errorMessage);
  });
});
