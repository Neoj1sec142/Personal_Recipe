import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Ingredient } from '../models/ingredient.model';
import { ListParams } from '../models/list-params.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "ingredient/" }

  get(id: number){ this.http.get<Ingredient>(this.apiUrl + `${id}/`) };
  create(c: Ingredient){ this.http.post<Ingredient>(this.apiUrl + `${c.id}/`, c) };
  update(c: Ingredient){ this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ this.http.get<Ingredient>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.post<Ingredient[]>(this.apiUrl, {...headers});
  }
}
