import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    constructor(private router: Router) {}

    ngOnInit(): void {
        if (window.localStorage.getItem('user')) {
            this.router.navigate(["system", "main"]);
        }
    }
}