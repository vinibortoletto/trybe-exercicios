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

  it('3. should return 400 error if name length is less than 4', async function () {
    const errorMessage = {
      message: 'O campo name deve ter pelo menos 4 caracteres',
    };

    const newActivityMock = {
      name: 'Tre',
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

  it('4. should return 400 error if price does not exists', async function () {
    const errorMessage = {
      message: 'O campo price é obrigatório',
    };

    const newActivityMock = {
      name: 'Trekking',
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

  it('5. should return 400 error if description does not exists', async function () {
    const errorMessage = {
      message: 'O campo description é obrigatório',
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
    };

    const response = await chai
      .request(app)
      .post('/activities')
      .send(newActivityMock);

    expect(response).to.have.status(400);
    expect(response.body).to.deep.equal(errorMessage);
  });

  it('6. should return 400 error if createdAt does not exists', async function () {
    const errorMessage = {
      message: 'O campo createdAt é obrigatório',
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 5,
        difficulty: 'Fácil',
      },
    };

    const response = await chai
      .request(app)
      .post('/activities')
      .send(newActivityMock);

    expect(response).to.have.status(400);
    expect(response.body).to.deep.equal(errorMessage);
  });

  it('7. should return 400 error if rating does not exists', async function () {
    const errorMessage = {
      message: 'O campo rating é obrigatório',
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
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

  it('8. should return 400 error if difficulty does not exists', async function () {
    const errorMessage = {
      message: 'O campo difficulty é obrigatório',
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 5,
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
