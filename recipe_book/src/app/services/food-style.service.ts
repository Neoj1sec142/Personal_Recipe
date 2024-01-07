import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/assets/environment';
import { FoodStyle } from '../models/food-style.model';

@Injectable({
  providedIn: 'root'
})
export class FoodStyleService {
  private apiUrl: string = env + 'foodstyles/';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<FoodStyle[]>(this.apiUrl);
  }

  get(id: number){
    return this.http.get<FoodStyle>(this.apiUrl + `${id}/`);
  }

  create(ing: FoodStyle){
    return this.http.post<FoodStyle>(this.apiUrl, ing);
  }

  delete(id: number){
    return this.http.delete<any>(this.apiUrl + `${id}/`);
  }

  update(ing: FoodStyle){
    return this.http.put<FoodStyle>(this.apiUrl + `${ing.id}/`, ing);
  }
}
