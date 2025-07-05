import { Flower } from '../classes/Flower';
describe('testing Flower class', () => {
  describe('flower HP', () => {
    test('when instantiated, creates an object with default properties', () => {
      const actual = new Flower();
      const expected = { currentHp: 100, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('when nutrition is called, updates currentHp by input amount', () => {
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
    test('hp is lowered when taking damage', () => {
      const actual = new Flower(80);
      actual.updateCurrentHp(-30);
      const expected = { currentHp: 50, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('hp does not get lower than 0', () => {
      const actual = new Flower(80);
      actual.updateCurrentHp(-90);
      const expected = { currentHp: 0, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
  });
  describe('testing flower nutrition', () => {
    test('when nutrition is called, updates nutrition by input amount', () => {
      const actual = new Flower(80);
      actual.updateNutrition(20);
      const expected = { currentHp: 80, maxHp: 100, nutrition: 20, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('nutrition does not exceed 100', () => {
      const actual = new Flower(80, 100, 80);
      actual.updateNutrition(30);
      const expected = { currentHp: 80, maxHp: 100, nutrition: 100, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('nutrition decreases on negative number input', () => {
      const actual = new Flower(80, 100, 50);
      actual.updateNutrition(-30);
      const expected = { currentHp: 80, maxHp: 100, nutrition: 20, growth: 0 };
      expect(actual).toEqual(expected);
    });
    test('nutrition stops at 0', () => {
      const actual = new Flower(80);
      actual.updateNutrition(-90);
      const expected = { currentHp: 80, maxHp: 100, nutrition: 0, growth: 0 };
      expect(actual).toEqual(expected);
    });
  });
});
