import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent {
  @Input() title: string = "title";
  @Input() date: string = "12.12.23";
}