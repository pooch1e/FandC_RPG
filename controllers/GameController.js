import { plantSeed } from '../models/GameModel.js';

const hydrationScore = document.getElementById('hydration');
const nutritionScore = document.getElementById('nutrition');
const healthScore = document.getElementById('health');
const growthScore = document.getElementById('growth');

const feedButton = document.getElementById('feedButton');

export const handleWaterButtonClick = () => {
  const waterButton = document.getElementById('waterButton');
  waterButton.addEventListener('click', (e) => {
    console.log(e.target, 'water button was clicked');
  });
};
