import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseCardComponent} from './course-card.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatMenu, MatMenuModule} from "@angular/material/menu";

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatMenuModule],
      declarations: [CourseCardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
