import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  question!: Question[];
  show: boolean = false;

  constructor(private user:UserService, private router: Router) {}

  click(){
    this.show=true;
    this.user.getAllTest('ratata').forEach((resp:Question[]) => {
      this.question = resp;
    });
  }

  exit(){
    window.localStorage.clear();
    this.router.navigate(['login']);
  }
}
