import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {AppRoutingModule} from './app-routing.module';
import {LibPageComponent} from './lib-page/lib-page.component';
import {HelpPageComponent} from './help-page/help-page.component';
import {SurveyPageComponent} from './survey-page/survey-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    FrontPageComponent,
    CoursePageComponent,
    CourseCardComponent,
    LibPageComponent,
    HelpPageComponent,
    SurveyPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
