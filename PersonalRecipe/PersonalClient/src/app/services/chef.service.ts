import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chef } from '../models/chef.model';
import { ListParams } from '../models/list-params.model';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "chef/" }

  get(id: number){ return this.http.get<Chef>(this.apiUrl + `${id}/`) };
  create(c: Chef){ return this.http.post<Chef>(this.apiUrl, c) };
  update(c: Chef){ return this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ return this.http.get<Chef>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.get<Chef[]>(this.apiUrl, {...headers});
  }
}
