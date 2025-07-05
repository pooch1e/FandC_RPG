import { Flower } from '../classes/Flower.js';

export const plantSeed = () => {
  const seed = new Flower(100, 100, 0, 0);
  console.log('Planted a seed');
  console.log(seed);
};
