import { plantSeed } from '../models/GameModel.js';

const hydrationScore = document.getElementById('hydration');
const nutritionScore = document.getElementById('nutrition');
const healthScore = document.getElementById('health');
const growthScore = document.getElementById('growth');

const feedButton = document.getElementById('feedButton');

export const handleSeedButtonClick = () => {
  const seedButton = document.getElementById('seedButton');
  seedButton.addEventListener('click', () => {
    // console.log(e.target, 'water button was clicked');
    const seed = plantSeed();
    return seed;
  });
};
