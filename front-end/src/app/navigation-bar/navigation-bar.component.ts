import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  searchInput = '';
  isLogin;

  constructor(
    private router: Router
  ) {
    this.isLogin = true;
  }

  ngOnInit(): void {

  }

  login() {

  }

  register() {

  }

  search() {
    this.router.navigate(['/search'], {queryParams: {search: this.searchInput}});
  }

}
