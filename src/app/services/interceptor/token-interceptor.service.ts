import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = request.clone({
       setHeaders: {
        access_token: `${authService.getToken()}`
       }
    })


    
    return next.handle(tokenizedReq).pipe(
      //Retry on failure 
      retry(2),

      //Handle errors
      catchError( (error: HttpErrorResponse) => {
         //add error handling logic here 
        // alert(`HTTP Error:${request.url}`);
        console.log(`HTTP Error:${request.url}`)
         return throwError(error);
      }),
       
       //Profiling : type of methode 
       finalize(()=> {
          const profilingMsg = `${request.method} *${request.urlWithParams}*`;
          console.log(profilingMsg);
       })
       )
  }    

}
  

  