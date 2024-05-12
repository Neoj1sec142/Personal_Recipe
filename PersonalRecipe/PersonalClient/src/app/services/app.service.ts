import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl: string = "http://localhost:5236/api/";
  constructor() { }
  getBaseUrl(){
    return this.baseUrl;
  }
}
