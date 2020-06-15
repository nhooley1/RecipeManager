import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
        id: 'r1',
        title: 'Schitzel',
        imageUrl: 'http://lovethatbite.com/wp-content/uploads/2018/10/wiener-schnitzel-kalb-veal-meat-cranberry-lemon-chives-potato-salad-salad-wiener-austrian-food-dish-original-recipe.jpeg',
        ingredients: ['French Fries','Pork Meat', 'Salad']
    },
    
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/f6e75d1/2147483647/strip/true/crop/2037x1358+6+0/resize/1680x1120!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F00%2F6b%2F717f4004e8220ab030a1a2993f7b%2Fla-fo-al-dente-pasta-cooking-photos-20170531-001',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
      ]

  constructor() { }

  getAllRecipes () {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {

    return {...this.recipes.find(recipe => {
    
      return recipe.id === recipeId;
      
    })}
  }
}
