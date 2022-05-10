import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  username = '';
  password = '';
  repeatPassword = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['/survey']);
  }

}
