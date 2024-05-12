import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "ingredient/" }

  get(){}
  getAll(){}
  create(){}
  update(){}
  delete(){}
}
