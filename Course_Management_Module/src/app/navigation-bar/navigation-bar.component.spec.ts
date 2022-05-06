import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatMenuModule, HttpClientModule],
      declarations: [NavigationBarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
