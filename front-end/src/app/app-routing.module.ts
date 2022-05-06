import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {FrontPageComponent} from "./front-page/front-page.component";
import {CoursePageComponent} from "./course-page/course-page.component";
import {HelpPageComponent} from "./help-page/help-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SurveyPageComponent} from "./survey-page/survey-page.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: 'course', component: CoursePageComponent},
  {path: '', component: HomePageComponent},
  {path: 'help', component: HelpPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'survey', component: SurveyPageComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
