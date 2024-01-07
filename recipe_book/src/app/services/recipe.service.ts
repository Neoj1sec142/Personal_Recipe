import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/assets/environment';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl: string = env + 'recipes/';
  constructor(
    private http: HttpClient
    ) { }

  getAll(){
    return this.http.get<Recipe[]>(this.apiUrl);
  }
  get(id: number){
    return this.http.get<Recipe>(this.apiUrl + `${id}/`);
  }
  create(recipe: Recipe){
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
  delete(id: number){
    return this.http.delete<any>(this.apiUrl + `${id}/`);
  }
  update(recipe: Recipe){
    return this.http.put<Recipe>(this.apiUrl + `${recipe.id}/`, recipe);
  }
}
