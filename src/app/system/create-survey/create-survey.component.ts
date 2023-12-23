import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';import { Question } from 'src/app/shared/interfaces';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent {
  constructor(private auth:AuthService, private user: UserService, private router: Router){}

  title: string = 'title_title';
  
  exit(){
    this.auth.logout();
    this.router.navigate(['login']);
  }


  create(){
    if (this.title){
      let date = new Date();
      let question: Question = {
        title: this.title,
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
