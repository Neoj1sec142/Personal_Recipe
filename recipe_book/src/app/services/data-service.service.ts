import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchParams } from '../models/data-params.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'https://world.openfoodfacts.net/api/v2/search';

  constructor(private http: HttpClient) { }
  
  public searchFood(params: SearchParams): Observable<any> {
    let queryParams = new HttpParams();
    Object.keys(params).forEach((key: string) => {
      const value = params[key];
      if (value) {
        queryParams = queryParams.append(key, value);
      }
    });
    return this.http.get(this.apiUrl, { params: queryParams });
  }
}
