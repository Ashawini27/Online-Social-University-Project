import {Component, OnInit} from '@angular/core';
import {Course} from "../_models/course";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data: Course[] = [{
    name: 'Intro to Java',
    disc: 'introduction to Java',
    lastOpened: new Date(),
    progress: 40,
    id: '1114',
    isMyCourse: false,
    tags: ['java', 'intro']
  }, {
    name: 'Intro to Python',
    disc: 'introduction to python',
    lastOpened: new Date(),
    progress: 40,
    id: '1235',
    isMyCourse: false,
    tags: ['python', 'intro']
  }, {
    name: 'Machine Learning with Python',
    disc: 'deep learning, reinforcement learning, and Q learning with Python',
    lastOpened: new Date(),
    progress: 40,
    id: '123',
    isMyCourse: false,
    tags: ['python', 'advanced']
  }]
  courses = []
  recommend = [this.data[0], this.data[1], this.data[2]]

  constructor() {
  }

  ngOnInit(): void {
  }

}
