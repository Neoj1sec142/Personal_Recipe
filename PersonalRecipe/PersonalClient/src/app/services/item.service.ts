import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "item/" }

  get(){}
  getAll(){}
  create(){}
  update(){}
  delete(){}
}
