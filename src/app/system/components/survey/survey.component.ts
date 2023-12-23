import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent {
  @Input() title: string = "title";
  @Input() date: string = "12.12.23";
  @Input() author:string = "author";

  constructor(private router: Router){}

  onClick(){
    this.router.navigate(['system','show', this.author, this.title])
  }
}