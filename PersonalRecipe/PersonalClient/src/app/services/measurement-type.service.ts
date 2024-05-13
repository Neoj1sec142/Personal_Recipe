import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MeasurementType } from '../models/meaurement-type.model';
import { ListParams } from '../models/list-params.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {
  private apiUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
  })
  constructor(
    private appSvc: AppService,
    private http: HttpClient,
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "measurementType/" }

  get(id: number){ return this.http.get<MeasurementType>(this.apiUrl + `${id}/`) };
  create(c: MeasurementType){ return this.http.post<MeasurementType>(this.apiUrl, c) };
  update(c: MeasurementType){ return this.http.put(this.apiUrl + `${c.id}/`, c) };
  delete(id: number){ return this.http.get<MeasurementType>(this.apiUrl + `${id}/`) };
  getAll(params: ListParams){
    const headers = this.headers;
    headers.append("MultiSearch", params.multiSearch ? "true" : "false");
    headers.append("SearchString", params.searchString ?? "");
    headers.append("SearchField", params.searchField ?? "");
    headers.append("OrderBy", params.orderBy ?? "");
    headers.append("Limit", params.limit ? params.limit.toString() : "");
    return this.http.get<MeasurementType[]>(this.apiUrl, {...headers});
  }
}
