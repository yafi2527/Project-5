import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger','A humberger with a rim of lettuce sitting on a black plate against a black backgound',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2),
  ]),
  new Recipe('Special fried rice','fried rice is a dish a cooked rice that has been stir-fried in a wro a'+
  'frying pan and is usually mixed with other ingredients such as eggs,vegetables,seafood,or meat,it is,it is often eaten','../src/app/img/nasgor.jpg',
[
  new Ingredient('chicken',1),
  new Ingredient('flour',3),
  new Ingredient('egg',1),
  new Ingredient('spices',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}