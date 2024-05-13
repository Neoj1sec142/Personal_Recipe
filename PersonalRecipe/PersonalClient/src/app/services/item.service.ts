import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListParams } from '../models/list-params.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "item/" }

  get(id: number){ return this.http.get<Item>(this.apiUrl + `${id}/`) };
  create(c: Item){ return this.http.post<Item>(this.apiUrl, c) };
  update(c: Item){ return this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ return this.http.get<Item>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.get<Item[]>(this.apiUrl, {...headers});
  }
}
