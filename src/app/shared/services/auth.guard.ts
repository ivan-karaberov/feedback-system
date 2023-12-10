import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";


export const AuthGuard = () => {
    const router = inject(Router);
    const auth = inject(AuthService);
    
    return auth.isAuth() ? true : router.parseUrl('/login');
  };