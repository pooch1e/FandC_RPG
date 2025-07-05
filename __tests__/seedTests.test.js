import { Flower } from '../classes/Flower';
describe('testing Flower class', () => {
  describe('planting a seed', () => {
    test('when instantiated, creates an object with default properties', () => {
      const actual = new Flower();
      const expected = { currentHp: 100, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
  });
});
