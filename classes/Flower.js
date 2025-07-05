//tracks growth, hydration, nutrition, health
class Flower {
  constructor(currentHp, maxHp, nutrition, growth) {
    //init state
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.nutrition = nutrition;
    this.growth = growth;
  }

  updateCurrentHp(hp) {
    this.currentHp += hp;
    console.log(`Current health points is: ${this.currentHp}`)
  }

    updateNutrition(nutrition) {
    this.nutrition += nutrition;
    console.log(`Current nutrition is: ${this.nutrition}`)
  }

  updateGrowth(growth) {
    this.growth += growth;
    console.log(`Current growth is: ${this.growth}`)
  }

}
