import {TestBed} from '@angular/core/testing';

import {CourseService} from './course.service';
import {HttpClientModule} from "@angular/common/http";

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
