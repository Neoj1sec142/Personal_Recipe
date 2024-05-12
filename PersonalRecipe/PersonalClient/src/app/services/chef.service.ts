import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Chef } from '../models/chef.model';
import { ListParams } from '../models/list-params.model';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "chef/" }

  get(id: number){ this.http.get<Chef>(this.apiUrl + `${id}/`) };
  create(c: Chef){ this.http.post<Chef>(this.apiUrl + `${c.id}/`, c) };
  update(c: Chef){ this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ this.http.get<Chef>(this.apiUrl + `${id}/`) };
  // getAll(listParams: ListParams){ this.http.get<Chef>(this.apiUrl + `${id}/`) };
}
