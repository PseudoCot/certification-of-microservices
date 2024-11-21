import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthStatus } from "../../shared/types/auth-status.type";
import { API_URL, AuthStatuses } from "../../shared/consts";
import { shareReplay } from "rxjs";

@Injectable()
export class AuthService {
  private _authStatus: AuthStatus = AuthStatuses.Unknown;

  constructor(private http: HttpClient) { }

  public isAuthenticated() {
    return this._authStatus === AuthStatuses.Auth;
  }

  public register(email: string, password: string) {
    return this.http.post(`${API_URL}/register`,
      { email, password })
      .pipe(
        shareReplay()
      );
  }

  public login(email: string, password: string) {
    return this.http.post(`${API_URL}/login`,
      { email, password })
      .pipe(
        shareReplay()
      );
  }

  public refreshToken() {
    return this.http.post(`${API_URL}/refreshToken`,
      {})
      .pipe(
        shareReplay()
      );
  }

  public logout() {
    return this.http.post(`${API_URL}/logout`,
      {})
      .pipe(
        shareReplay()
      );
  }
}
