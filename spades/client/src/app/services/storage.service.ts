import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string){
    return localStorage.getItem(key)
  }

  set(key: string, simple?: string, complex?: any){
    if(!simple){
      const value = JSON.stringify(complex)
      localStorage.setItem(key, value)
    }else{ localStorage.setItem(key, simple) }
  }

  hasValue(key: string){
    return !!localStorage.getItem(key);
  }

  remove(key: string){
    localStorage.removeItem(key)
  }

  clear(){
    localStorage.clear()
  }
}
