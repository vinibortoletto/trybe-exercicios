const { getWorkerDetail } = require('./getWorker');

describe('getWorkerDetail', () => {
  it('1. should be a function.', () => {
    expect(typeof getWorkerDetail).toBe('function');
  });

  it('2. should return correct worker detail', () => {
    expect(getWorkerDetail('8579-6', 'firstName')).toEqual('Jerry');
    expect(getWorkerDetail('5569-4', 'lastName')).toEqual('Costanza');
    expect(getWorkerDetail('4456-4', 'specialties')).toEqual([
      'Context API',
      'RTL',
      'Bootstrap',
    ]);
  });

  it('3. should return message "ID not found" if parameter "id" is incorrect', () => {
    expect(() => getWorkerDetail('', 'firstName')).toThrow();
    expect(() => getWorkerDetail('', 'firstName')).toThrow(
      new Error('ID not found')
    );
  });

  it('4. should return message "Detail not found" if parameter "detail" is incorrect', () => {
    expect(() => getWorkerDetail('4456-4', '')).toThrow();
    expect(() => getWorkerDetail('4456-4', '')).toThrow(
      new Error('Detail not found')
    );
  });
});
