import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  name = 'Title';
  disc = 'This is the description of the course';
  lastOpened = new Date();
  progress = 40;
  id = '123';

  constructor() {
  }

  ngOnInit(): void {
  }

}
