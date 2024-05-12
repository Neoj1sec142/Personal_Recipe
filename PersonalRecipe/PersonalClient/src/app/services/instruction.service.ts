import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private apiUrl: string = "";
  constructor(
    private appSvc: AppService
  ){ this.apiUrl = this.appSvc.getBaseUrl() + "instruction/" }

  get(){}
  getAll(){}
  create(){}
  update(){}
  delete(){}
}
