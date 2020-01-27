import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
/**
 * This interceptor automatically adds the token header needed by our backend API if such token is present
 * in the current state of the application.
 */
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
      let newHeaders = req.headers;
      if (token) {
        newHeaders = newHeaders.append('Authorization', token);
        newHeaders.append('Content-Type', 'application/json');
      }
      const authReq = req.clone({headers: newHeaders});
      return next.handle(authReq);
  }
}

=====================================================================================
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service'

providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
