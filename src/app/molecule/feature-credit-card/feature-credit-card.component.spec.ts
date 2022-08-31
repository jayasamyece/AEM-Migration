import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCreditCardComponent } from './feature-credit-card.component';

describe('FeatureCreditCardComponent', () => {
  let component: FeatureCreditCardComponent;
  let fixture: ComponentFixture<FeatureCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
