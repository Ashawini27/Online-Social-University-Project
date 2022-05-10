import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})


export class CoursePageComponent implements OnInit {
  pages = [{chapter: 1, page: 15},
    {chapter: 2, page: 33},
    {chapter: 3, page: 77},
    {chapter: 4, page: 133},
    {chapter: 5, page: 1},
    {chapter: 6, page: 1},
    {chapter: 7, page: 1},
    {chapter: 8, page: 1}
  ];
  currPage = 1;

  src = '/assets/javanotes6-linked.pdf'

  constructor() {
  }

  ngOnInit(): void {
  }

  change(page: number) {
    this.currPage = page;
  }

}
