const { workDays, weekDays } = require('./days');

describe('Days', () => {
  test('sunday should be a week day', () => {
    expect(weekDays).toContain('Sunday');
  });

  test('Sunday should not be a work day', () => {
    expect(workDays).not.toContain();
  });
});
