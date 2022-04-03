import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Beverage, Dessert } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijuca', 15);

    this._meal.add(rice, beans);

    return this;
  }
  makeBeverage(): this {
    const beer = new Beverage('Duff', 10);

    this._meal.add(beer);
    return this;
  }
  makeDessert(): this {
    const cakePiece = new Dessert('Chocolate Cake', 10);
    this._meal.add(cakePiece);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
