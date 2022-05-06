import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../_services/course.service";

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {
  title = ''
  content = ''

  constructor(private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.courseService.ask(this.title, this.content).subscribe(
      () => {
        //this.router.navigate(['/'])
      }
    );
    this.router.navigate(['/'])
  }

}
