import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavChildComponent } from './nav-child.component';

describe('NavChildComponent', () => {
  let component: NavChildComponent;
  let fixture: ComponentFixture<NavChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
