import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCreditCardSectionComponent } from './feature-credit-card-section.component';

describe('FeatureCreditCardSectionComponent', () => {
  let component: FeatureCreditCardSectionComponent;
  let fixture: ComponentFixture<FeatureCreditCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCreditCardSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCreditCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
