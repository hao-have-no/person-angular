import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMeasurementComponent } from './hero-measurement.component';

describe('HeroMeasurementComponent', () => {
  let component: HeroMeasurementComponent;
  let fixture: ComponentFixture<HeroMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
