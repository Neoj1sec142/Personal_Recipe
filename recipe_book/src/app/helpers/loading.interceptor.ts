import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingSvc: LoadingService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingSvc.addRequest(request.url);
    
    let token;
    
      token = localStorage.getItem('access_token') ?? "";
      let authReq;
      if(token){
        authReq= request.clone({
          headers: request.headers.set('Authorization', `JWT ${token}`)
        })
      }else{
        authReq= request.clone({})
      };
      return this.handleRequest(authReq, next);
    
      // return this.handleRequest(request, next);
    }
  
  
  private handleRequest(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.showLoading();
    return next.handle(request).pipe(
      delay(250),
      finalize(() => {
        this.loadingSvc.removeRequest(request.url);
      })
    );
  }

}