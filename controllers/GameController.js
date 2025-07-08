import { plantSeed } from '../models/GameModel.js';

const hydrationScore = document.getElementById('hydration');
const nutritionScore = document.getElementById('nutrition');
const healthScore = document.getElementById('health');
const growthScore = document.getElementById('growth');

const feedButton = document.getElementById('feedButton');

const handleDisplayPot = () => {
  //display pot on screen
  const flowerContainer = document.getElementById('flowerContainer');
  const potPlant = document.createElement('img');
  potPlant.src = '../public/assets/flowerPot/Flower Pot 4 - RED.png';
  potPlant.alt = 'pixel art image of a pot';
  flowerContainer.appendChild(potPlant);
};

export const handleSeedButtonClick = () => {
  const seedButton = document.getElementById('seedButton');
  seedButton.addEventListener('click', () => {
    const seed = plantSeed();
    handleDisplayPot();
    return seed;
  });
};

export const handleWatterButtonClick = () => {
  const waterButton = document.getElementById('waterButton');
  waterButton.addEventListener('click', () => {
    waterPlant();
  });
};
