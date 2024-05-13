import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuickRecipe, Recipe } from '../models/recipe.model';
import { ListParams } from '../models/list-params.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "recipe/" }

  get(id: number){ return this.http.get<Recipe>(this.apiUrl + `${id}/`) };
  create(c: Recipe){ return this.http.post<Recipe>(this.apiUrl, c) };
  quickCreate(c: QuickRecipe){ return this.http.post<Recipe>(this.apiUrl + `quick/`, c) };
  update(c: Recipe){ return this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ return this.http.get<Recipe>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.get<Recipe[]>(this.apiUrl, {...headers});
  }
}
