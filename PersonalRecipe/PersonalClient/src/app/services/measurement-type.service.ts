import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "measurementtype/" }

  get(){}
  getAll(){}
  create(){}
  update(){}
  delete(){}
}
