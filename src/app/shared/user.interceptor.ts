import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token') !==null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+localStorage.getItem('token'))
      })
      return next.handle(clone)
    }
    return next.handle(request);
  }
}

export const TokenInterceptorProvider= {
  provide: HTTP_INTERCEPTORS,
  useClass: UserInterceptor,
  multi: true
}
