import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIRequestInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    return next.handle(req).pipe(finalize(() => {
    }));
  }
}
