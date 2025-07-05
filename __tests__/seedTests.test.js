import { Flower } from '../classes/Flower';
describe('testing Flower class', () => {
  describe('planting a seed', () => {
    test('when instantiated, creates an object with default properties', () => {
      const actual = new Flower();
      const expected = { currentHp: 100, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('when update hp is called, updates currentHp by input amount', () => {
      const actual = new Flower(80);
      actual.updateCurrentHp(20);
      const expected = { currentHp: 100, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('hp does not exceed 100 (max hp)', () => {
      const actual = new Flower(80);
      actual.updateCurrentHp(30);
      const expected = { currentHp: 100, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
  });
});
