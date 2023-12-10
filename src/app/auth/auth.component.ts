import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit(): void {
        if (this.auth.isAuth()) {
            this.router.navigate(["system", "main"]);
        }
    }
}