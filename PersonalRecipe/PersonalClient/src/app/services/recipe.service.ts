import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "recipe/" }

  get(){}
  getAll(){}
  create(){}
  update(){}
  delete(){}
}
