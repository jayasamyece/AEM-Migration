import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderContainerComponent } from './nav-header-container.component';

describe('NavHeaderContainerComponent', () => {
  let component: NavHeaderContainerComponent;
  let fixture: ComponentFixture<NavHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeaderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
