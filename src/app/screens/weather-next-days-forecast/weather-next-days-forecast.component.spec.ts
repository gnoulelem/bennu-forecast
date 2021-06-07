import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNextDaysForecastComponent } from './weather-next-days-forecast.component';

describe('WeatherNextDaysForecastComponent', () => {
  let component: WeatherNextDaysForecastComponent;
  let fixture: ComponentFixture<WeatherNextDaysForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherNextDaysForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNextDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
