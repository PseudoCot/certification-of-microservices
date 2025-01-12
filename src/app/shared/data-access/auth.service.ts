import { StorageService } from './storage.service';
import { Injectable } from "@angular/core";
import { ApiRoutes } from "../consts";
import { HttpService } from "./http.service";
import { RegisterDataModel } from "../models/auth-register/register.data-model";
import { LoginDataModel } from "../models/auth-login/login.data-model";
import { UserData } from "../models/data/user.data";
import { LoginData } from "../models/data/login.data";
import { BehaviorSubject, tap } from "rxjs";
import { RequestState } from "../types/http/request-state.type";
import { Router } from "@angular/router";
import { LogoutDataModel } from '../models/__auth-logout/logout.data-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _authStatus: AuthStatus = AuthStatuses.Unknown;

  public registerData$ = new BehaviorSubject<RequestState<UserData> | null>(null);
  public loginData$ = new BehaviorSubject<RequestState<LoginData> | null>(null);

  constructor(
    private http: HttpService,
    private router: Router,
    private storageService: StorageService,
  ) {
    // if (!storageService.getSessionData()?.token && !router.url.includes('register')) {
    //   this.router.navigateByUrl('auth/login');
    // }
  }

  public isAuthenticated() {
    // return this._authStatus === AuthStatuses.Auth;
    return !!this.storageService.getSessionData();
  }

  public register(dataModel: RegisterDataModel) {
    const req = this.http.dataModelRequest<UserData>(
      dataModel,
      ApiRoutes.Register
    ).pipe(
      tap((reqState) => {
        if (reqState.isSuccess) {
          this.router.navigateByUrl('auth/login');
        }
      })
    );
    req.subscribe(this.registerData$);
    return req;
  }

  public login(dataModel: LoginDataModel) {
    const req = this.http.dataModelRequest<LoginData>(
      dataModel,
      ApiRoutes.Login
    ).pipe(
      tap((reqState) => {
        if (reqState.isSuccess && reqState.data?.accessToken) {
          this.storageService.setSessionData({ token: reqState.data?.accessToken })
          this.router.navigateByUrl('services');
        }
      })
    );
    req.subscribe(this.loginData$);
    return req;
  }

  // public refreshToken() {
  //   return this.http.post(`${API_URL}/refreshToken`,
  //     {})
  //     .pipe(
  //       shareReplay()
  //     );
  // }

  public logout(dataModel: LogoutDataModel) {
    // const req = this.http.dataModelRequest<LogoutDataModel>(
    //   dataModel,
    //   ApiRoutes.Logout
    // ).pipe(
    //   tap((reqState) => {
    //     if (reqState.isSuccess) {
    //       this.storageService.removeSession();
    //       this.loginData$ = new BehaviorSubject<RequestState<LoginData> | null>(null);
    //       this.router.navigateByUrl('auth/login');
    //     }
    //   })
    // );
    this.storageService.removeSession();
    this.loginData$ = new BehaviorSubject<RequestState<LoginData> | null>(null);
    this.router.navigateByUrl('auth/login');
    return dataModel.getDataFromResponseDTO(undefined);
  }
}
