import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../data-access/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    return true;
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
