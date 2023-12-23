import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
      nickname: new FormControl("", [Validators.required, Validators.minLength(4)], this.forbiddenNickname.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    const user: User = {nickname: this.form.value.nickname, email: this.form.value.email, password: this.form.value.password};
    console.log(user);
    this.auth.register(user).subscribe(
      () => {
        window.localStorage.setItem('user',JSON.stringify(user));
        this.router.navigate(['/system', 'main']);
    },
    err => alert('При регистрации произошла ошибка, попробуйте позже')
    );
    console.log('test');
  }

  forbiddenEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.login(control.value)
      .subscribe((user) => {
        if (user.length){
          resolve({forbiddenEmail: true});
        } else{
          resolve(null);
        }
      });
    });
  }

  forbiddenNickname(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.getUserByNickname(control.value)
      .subscribe((user) => {
        if (user.length){
          resolve({forbiddenNickname: true});
        } else{
          resolve(null);
        }
      });
    });
  }
}

