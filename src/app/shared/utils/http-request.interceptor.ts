import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/data-access/auth.service';
import { EventBusService } from '../data-accesss/event-bus.service';
import { StorageService } from '../data-accesss/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("id_token"); // заменить на использование сервиса

    const cloned = req.clone({
      headers: idToken
        ? req.headers.set("Authorization", `Bearer ${idToken}`)
        : req.headers,
      withCredentials: true,
    });

    return next.handle(cloned).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this._handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private _handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;

            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;

            if (error.status == '403') {
              this.eventBusService.emit({ name: 'logout' });
            }

            return throwError(() => error);
          })
        );
      }
    }

    return next.handle(request);
  }
}


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
