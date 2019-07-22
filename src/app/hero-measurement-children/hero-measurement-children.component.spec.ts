import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMeasurementChildrenComponent } from './hero-measurement-children.component';

describe('HeroMeasurementChildrenComponent', () => {
  let component: HeroMeasurementChildrenComponent;
  let fixture: ComponentFixture<HeroMeasurementChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMeasurementChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMeasurementChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
