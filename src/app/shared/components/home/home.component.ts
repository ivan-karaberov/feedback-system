import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
      if (this.auth.isAuth()) {
          this.router.navigate(["system", "main"]);
      }
  }
}
