import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoBlockListComponent } from './promo-block-list.component';

describe('PromoBlockListComponent', () => {
  let component: PromoBlockListComponent;
  let fixture: ComponentFixture<PromoBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoBlockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
