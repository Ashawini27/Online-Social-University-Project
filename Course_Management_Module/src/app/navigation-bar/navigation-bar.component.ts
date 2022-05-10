import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  searchInput = '';
  isLogin;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.isLogin = (this.authService.currentUser != null);
  }

  ngOnInit(): void {

  }


  search() {
    this.router.navigate(['/search'], {queryParams: {search: this.searchInput}});
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }

}
