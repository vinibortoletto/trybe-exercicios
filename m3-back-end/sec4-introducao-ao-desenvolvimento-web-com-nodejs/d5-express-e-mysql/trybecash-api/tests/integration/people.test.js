const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../../src/app');
const { connection } = require('../../src/db/connection');

const { expect, use } = chai;
use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('Endpoint /people', function () {
  afterEach(sinon.restore);

  it('should register new person', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai.request(app).post('/people').send({
      firstName: 'Luke',
      lastName: 'Skywalker',
      email: 'luke.skywalker@trybe.com',
      phone: '851 678 4453',
    });

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Pessoa cadastrada com sucesso com o id 42',
    });
  });

  it('should list all people', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai.request(app).get('/people');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('should get person by id', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList[0]]);
    const response = await chai.request(app).get('/people/1');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  it('should update person by id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const updatedPerson = {
      firstName: 'Lucão',
      lastName: 'Andarilho dos céus',
      email: 'lucao.andarilho@trybe.com',
      phone: '851 678 4453',
    };

    const response = await chai
      .request(app)
      .put('/people/1')
      .send(updatedPerson);

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      message: 'Pessoa de id 1 atualizada com sucesso',
    });
  });

  it('should delete person by id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      message: 'Pessoa de id 1 excluída com sucesso',
    });
  });
});
