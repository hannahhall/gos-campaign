import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';

import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from './home.component';
import { UserService } from 'src/app/services/user/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy()
          }
        },
      ],
      declarations: [
        HomeComponent,
        MockComponent(NavComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
