import { Injectable } from "@angular/core";
import { AuthStatus } from "../types/auth-status.type";
import { ApiRoutes, AuthStatuses } from "../consts";
import { HttpService } from "./http.service";
import { RegisterDataModel } from "../models/auth-register/register.data-model";
import { LoginDataModel } from "../models/auth-login/login.data-model";
import { UserData } from "../models/data/user.data";
import { LoginData } from "../models/data/login.data";
import { BehaviorSubject } from "rxjs";
import { RequestState } from "../types/http/request-state.type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStatus: AuthStatus = AuthStatuses.Unknown;

  public registerData$ = new BehaviorSubject<RequestState<UserData> | null>(null);
  public loginData$ = new BehaviorSubject<RequestState<LoginData> | null>(null);

  constructor(private http: HttpService) { }

  public isAuthenticated() {
    return this._authStatus === AuthStatuses.Auth;
  }

  public register(dataModel: RegisterDataModel) {
    const req = this.http.dataModelRequest<UserData>(
      dataModel,
      ApiRoutes.Register
    );
    req.subscribe(this.registerData$);
    return req;
  }

  public login(dataModel: LoginDataModel) {
    const req = this.http.dataModelRequest<LoginData>(
      dataModel,
      ApiRoutes.Login
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

  // public logout() {
  //   return this.http.post(`${API_URL}/logout`,
  //     {})
  //     .pipe(
  //       shareReplay()
  //     );
  // }
}
