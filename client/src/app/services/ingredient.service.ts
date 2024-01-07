import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/assets/environment';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiUrl: string = env + 'ingredients/';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  get(id: number){
    return this.http.get<Ingredient>(this.apiUrl + `${id}/`);
  }

  create(ing: Ingredient){
    return this.http.post<Ingredient>(this.apiUrl, ing);
  }

  delete(id: number){
    return this.http.delete<any>(this.apiUrl + `${id}/`);
  }

  update(ing: Ingredient){
    return this.http.put<Ingredient>(this.apiUrl + `${ing.id}/`, ing);
  }
}
