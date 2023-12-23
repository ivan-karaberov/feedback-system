import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';import { Question } from 'src/app/shared/interfaces';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit{
  constructor(private auth:AuthService, private user: UserService, private router: Router){}

  form!: FormGroup;

  exit(){
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit(){
      this.form = new FormGroup({
        title: new FormControl("", [Validators.required, Validators.minLength(4)]),
    });
  }


  onSubmit(){
    if (this.form.value){
      let date = new Date();
      let question: Question = {
        title: this.form.value.title,
        author: this.user.getNickname(),
        date: date.getFullYear().toString(),
        answers: []
      }
        this.user.createSurvey(question).subscribe(
          () => {
            this.router.navigate(['/system', 'main']);
          }
        )
    }
    else{
      alert("Поле не должно быть пустым");
    }
  }
}
