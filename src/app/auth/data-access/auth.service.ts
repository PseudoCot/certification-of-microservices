import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../shared/types/user.type";
import { AuthStatus } from "../../shared/types/auth-status.type";
import { API_URL, AuthStatuses } from "../../shared/consts";
import { shareReplay } from "rxjs";

@Injectable()
export class AuthService {
  private authStatus: AuthStatus = AuthStatuses.Unknown;

  constructor(private http: HttpClient) { }

  public isAuthenticated() {
    return this.authStatus === AuthStatuses.Auth;
  }

  public register(email: string, password: string) {
    return this.http.post<User>(`${API_URL}/register`,
      { email, password })
      .pipe(
        shareReplay()
      );
  }

  public login(email: string, password: string) {
    return this.http.post<User>(`${API_URL}/login`,
      { email, password })
      .pipe(
        shareReplay()
      );
  }

  public refteshToken() {
    return this.http.post<User>(`${API_URL}/refreshToken`,
      {})
      .pipe(
        shareReplay()
      );
  }

  public logout() {
    return this.http.post<User>(`${API_URL}/logout`,
      {})
      .pipe(
        shareReplay()
      );
  }
}
