import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get(`http://localhost:3030/course/get`)
  }

  removeCourse(courseID: string) {
    return this.http.post(`http://localhost:3030/course/remove`, {id: courseID});
  }

  search(value: string) {
    return this.http.post(`http://localhost:3030/course/search`, {value: value});
  }

  ask(title: string, content: string) {
    return this.http.post(`http://localhost:3030/course/ask`, {title: title, content: content});
  }
}
