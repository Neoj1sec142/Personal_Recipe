import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/assets/environment';
import { Instruction } from '../models/instruction.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private apiUrl: string = env + 'instructions/';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Instruction[]>(this.apiUrl);
  }

  get(id: number){
    return this.http.get<Instruction>(this.apiUrl + `${id}/`);
  }

  create(ing: Instruction){
    return this.http.post<Instruction>(this.apiUrl, ing);
  }

  delete(id: number){
    return this.http.delete<any>(this.apiUrl + `${id}/`);
  }

  update(ing: Instruction){
    return this.http.put<Instruction>(this.apiUrl + `${ing.id}/`, ing);
  }
}
