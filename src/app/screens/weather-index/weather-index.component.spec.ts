import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIndexComponent } from './weather-index.component';

describe('WeatherIndexComponent', () => {
  let component: WeatherIndexComponent;
  let fixture: ComponentFixture<WeatherIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
