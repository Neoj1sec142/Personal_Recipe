import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instruction } from '../models/instruction.model';
import { ListParams } from '../models/list-params.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "instruction/" }

  get(id: number){ return this.http.get<Instruction>(this.apiUrl + `${id}/`) };
  create(c: Instruction){ return this.http.post<Instruction>(this.apiUrl, c) };
  update(c: Instruction){ return this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ return this.http.get<Instruction>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.get<Instruction[]>(this.apiUrl, {...headers});
  }
}
