import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from '../../shared/interfaces'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  form!: FormGroup;
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      nickname: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    const user: User = {nickname: this.form.value.nickname, email: this.form.value.email, password: this.form.value.password};
    console.log(user);
    this.auth.register(user).subscribe(
      () => {
        window.localStorage.setItem('user', this.form.value.nickname);
        this.router.navigate(['/system', 'main']);
    }
    );
    console.log('test');
  }
}

