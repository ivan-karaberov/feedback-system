import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  question!: Question[];
  show: boolean = false;

  constructor(private auth: AuthService, private user:UserService, private router: Router) {}
  
  ngOnInit(){
    this.user.getAllTest(this.user.getNickname()).forEach((resp:Question[]) => {
      this.question = resp;
    });
  }
  
  create_survey(){
    this.router.navigate(['system','create_survey']);
  }

  exit(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
