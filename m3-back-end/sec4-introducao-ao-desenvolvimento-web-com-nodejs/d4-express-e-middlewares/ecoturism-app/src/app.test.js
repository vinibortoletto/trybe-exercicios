const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('./app');
const crypto = require('crypto');

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

  it('9. should return 400 error if createdAt has invalid format', async function () {
    const errorMessage = {
      message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'",
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 5,
        difficulty: 'Fácil',
        createdAt: '10-08-2022',
      },
    };

    const response = await chai
      .request(app)
      .post('/activities')
      .send(newActivityMock);

    expect(response).to.have.status(400);
    expect(response.body).to.deep.equal(errorMessage);
  });

  it('10. should return 400 error if rating is not an integer between 1 and 5', async function () {
    const errorMessage = {
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 10,
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

  it('11. should return 400 error if difficulty is not "Fácil", "Médio" or "Difícil"', async function () {
    const errorMessage = {
      message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'",
    };

    const newActivityMock = {
      name: 'Trekking',
      price: 0,
      description: {
        rating: 5,
        difficulty: 'Wrong Difficulty',
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

describe('POST /signup', function () {
  it('1. should return 401 if any field is invalid', async function () {
    const errorMessage = { message: 'Campos ausentes!' };

    const newUserMock = {
      email: '',
      password: '',
      firstName: '',
      phone: '',
    };

    const response = await chai.request(app).post('/signup').send(newUserMock);

    expect(response).to.have.status(401);
    expect(response.body).to.deep.equal(errorMessage);
  });

  it('2. should return status 200 and a random token when new user is inserted', async function () {
    const randomToken = '04f5c21ff7f0ce3e';
    sinon.stub(crypto, 'randomBytes').returns(randomToken);

    const newUserMock = {
      email: 'email@test.com',
      password: 'test',
      firstName: 'test',
      phone: '1234567890',
    };

    const response = await chai.request(app).post('/signup').send(newUserMock);

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal({ token: randomToken });

    sinon.restore();
  });

  it('3. should return status 401 if token is invalid', async function () {
    const errorMessage = { message: 'Token inválido!' };

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
      .set({ authorization: '' })
      .send(newActivityMock);

    expect(response).to.have.status(401);
    expect(response.body).to.deep.equal(errorMessage);
  });
});
