//tracks growth, hydration, nutrition, health
export class Flower {
  constructor(currentHp = 100, maxHp = 100, nutrition = 0, growth = 0) {
    //init state
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.nutrition = nutrition;
    this.growth = growth;
  }

  updateCurrentHp(hp) {
    this.currentHp += hp;
    if (this.currentHp >= this.maxHp) {
      this.currentHp = 100;
    }
    console.log(`Current health points is: ${this.currentHp}`);
  }

  updateNutrition(nutrition) {
    this.nutrition += nutrition;
    console.log(`Current nutrition is: ${this.nutrition}`);
  }

  updateGrowth(growth) {
    this.growth += growth;
    console.log(`Current growth is: ${this.growth}`);
  }
}
