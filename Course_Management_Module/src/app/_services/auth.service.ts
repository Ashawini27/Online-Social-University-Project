import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../_models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currUser: Observable<User>;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currUser = this.currentUserSubject.asObservable();
  }

  public get currentUser(): User {
    // @ts-ignore
    return this.currentUserSubject.value;


  }

  login(username: string, password: string) {
    this.http.post<any>(`http://localhost:3030/user/getUser`, {username, password})
      .subscribe(
        next => {
          localStorage.setItem('currentUser', JSON.stringify(next));
        }
      )
  }

  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }

  register(username: string, password: string) {
    return this.http.post(`http://localhost:3030/user/register`, {username, password})
  }

  survey(result: number[]) {
    return this.http.post(`http://localhost:3030/user/survey`, {result});
  }

}
