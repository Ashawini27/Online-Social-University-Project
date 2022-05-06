import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../_services/course.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
  questions = ["How familiar are you with Python", "How familiar are you with Java",
    "How familiar are you with C", "How familiar are you with Ruby"]
  answers: number[] = [];

  constructor(private router: Router,
              private authService: AuthService) {
    for (let i = 0; i < this.questions.length; i++) {
      this.answers.push(-1)
    }
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.survey(this.answers);
    this.router.navigate(['/']);
  }

}
