import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from '../../data-access/storage.service';

const AUTH_KEY_HEADER = 'Authorization';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private storageService: StorageService,
  ) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtSession = this.storageService.getSessionData();

    const clonedReq = req.clone({
      headers: jwtSession
        ? req.headers.set(AUTH_KEY_HEADER, `Bearer ${jwtSession.token}`)
        : req.headers,
      // withCredentials: true,
    });

    return next.handle(clonedReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response && event.url?.includes('login')) {
          const jwtToken = event.headers.get(AUTH_KEY_HEADER);
          if (jwtToken) {
            this.storageService.setSessionData({
              token: jwtToken
            });
          }
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse && !req.url.includes('login')
          && error.status === 401
        ) {
          return this._handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      // this.isRefreshing = true;

      // if (this.storageService.isLoggedIn()) {
      // return this.authService.refreshToken().pipe(
      //   switchMap(() => {
      //     this.isRefreshing = false;

      //     return next.handle(request);
      //   }),
      //   catchError((error) => {
      //     this.isRefreshing = false;

      //     if (error.status == '403') {
      //       this.eventBusService.emit({ name: 'logout' });
      //     }

      //     return throwError(() => error);
      //   })
      // );
    }
    // }

    return next.handle(request);
  }


  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let authReq = req;
  //   const sessionData = this._sessionStorageService.getSessionData();
  //   if (sessionData?.token) {
  //     authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + sessionData.token) });
  //   }

  //   return next.handle(authReq).pipe(
  //     tap({
  //       error: (err: Error) => {
  //         if (err instanceof HttpErrorResponse) {
  //           if (!sessionData?.token && err.status !== 401) {
  //             return;
  //           }
  //           this.router.navigate(['account/login']);
  //         }
  //       }
  //     })
  //   )
  // }
}
