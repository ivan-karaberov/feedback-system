import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmit(){
    /* Авторизация пользователя*/
    this.auth.login(this.form.value.email).subscribe(
      (responce: User[]) => {
        if(responce.length){
          if(this.form.value.email === responce[0].email && this.form.value.password === responce[0].password){
            window.localStorage.setItem('user',responce[0].nickname);
            this.router.navigate(['/system', 'main']);
          }
          else{
            alert('Авторизация не произведена. Email или Пароль не соответсвуют действительности');
          } 
        } else {
          alert('Авторизация не произведена. Email или Пароль не соответсвуют действительности');
        }
      },
      err => alert('При авторизации произошла ошибка, попробуйте заново')
      )
  }
}
