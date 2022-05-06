import {Component, OnInit} from '@angular/core';
import {Course} from "../_models/course";
import {MatSelectionList} from "@angular/material/list";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  subjects = ['C++', 'Java', 'JavaScript', 'Python']

  levels = ['introductory', 'intermediate', 'advanced']


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

  courses = this.data

  constructor() {
  }

  ngOnInit(): void {
  }

  filter(x: MatSelectionList, y: MatSelectionList) {
    let sub = x.selectedOptions.selected;
    let lev = y.selectedOptions.selected;
    if (sub.length == 0 && lev.length == 0) {
      this.courses = this.data
    } else if (sub.length == 0) {

      this.courses = this.data.filter((res) => {
        let temp = false;
        for (let i = 0; i < lev.length; i++) {
          console.log(lev[i])
          // if(res.tags.includes(lev[i])){
          //   temp = true;
          //   break;
          // }
        }
        this.courses.push(res);
      })
    }
  }
}
