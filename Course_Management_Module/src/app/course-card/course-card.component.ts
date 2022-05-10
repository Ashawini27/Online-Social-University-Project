import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../_models/course";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = {
    name: 'Title',
    disc: 'This is the description of the course',
    lastOpened: new Date(),
    progress: 40,
    id: '123',
    isMyCourse: false,
    tags: []
  }


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openCourse() {
    this.router.navigate(['/course'], {queryParams: {course: this.course.id}});
  }

  remove() {

  }

}
