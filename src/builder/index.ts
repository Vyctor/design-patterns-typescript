import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();

const meal = mainDishBuilder.makeMeal().makeBeverage().makeDessert().getMeal();

console.log(meal.getPrice());

mainDishBuilder.reset();
