const Flower = require('./Flower');

export const plantSeed = () => {
  const seed = new Flower(100, 100, 0, 0);
  console.log('Planted a seed');
};
