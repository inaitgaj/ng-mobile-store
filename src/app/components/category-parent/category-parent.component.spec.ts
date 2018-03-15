import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryParentComponent } from './category-parent.component';

describe('CategoryParentComponent', () => {
  let component: CategoryParentComponent;
  let fixture: ComponentFixture<CategoryParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
