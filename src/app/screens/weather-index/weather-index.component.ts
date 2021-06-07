import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-index',
  templateUrl: './weather-index.component.html',
  styleUrls: ['./weather-index.component.scss']
})
export class WeatherIndexComponent implements OnInit {

  icon: any;
  date: any;
  temperature: string = 'Loading';
  realfeeltemperature: any;

  country: any;
  city: any;
  location: any;

  sunset: any;

  todaySelected: boolean = true;
  tomorrowSelected: boolean = false;

  tweleveHoursForecats: any;

  userLat: any = 0;
  userLng: any = 0;

  nextDays: any;

  tomorrowDay: any;

  constructor(private weatherservice: WeatherService, private locationservice: LocationService, private route: Router) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    this.locationservice.getPosition().then(
      pos => {
        this.userLat = pos.lat;
        this.userLng = pos.lng;

        this.getGeoPosition();

      }
    );
  }

  getGeoPosition() {
    this.weatherservice.getGeoPosition(this.userLat+','+this.userLng).subscribe(
      (response) => {
        this.location = response;

        this.getCurrentConditions();

        this.getOneDayForecast();

        this.getTweleveHoursForecast();     

        this.getNextDaysForecast();
      
      }
    );
  }

  getToDaySituation() {
    this.todaySelected = true;
    this.tomorrowSelected = false;
  }

  getTomorrowSituation() {
    this.todaySelected = false;
    this.tomorrowSelected = true;
  }

  getCurrentConditions() {
    this.weatherservice.getCurrentConditions(this.location.Key).subscribe(
      (response) => {
        this.icon = response[0].WeatherIcon;
        this.date = response[0].LocalObservationDateTime;
        this.temperature = response[0].Temperature.Metric.Value;
        this.realfeeltemperature = response[0].RealFeelTemperature.Metric.Value;
      }
    );
  }

  

  getOneDayForecast() {
    this.weatherservice.getOneDayForecast(this.location.Key).subscribe(
      (response) => {
        this.sunset = response.DailyForecasts[0].Sun.Set;
      }
    );
  }

  getTweleveHoursForecast() {
    this.weatherservice.getTweleveHoursForecast(this.location.Key).subscribe(
      (response) => {
        this.tweleveHoursForecats = response;
      }
    );
  }

  getNextDaysForecast() {
    this.weatherservice.getNextDaysForecats(this.location.Key).subscribe(
      (response) => {
        
        this.nextDays = response.DailyForecasts;
        this.tomorrowDay = response.DailyForecasts[1];
        
        this.nextDays.splice(0, 2);
        
      }
    );
  }

  goToNexDaysForecat() {
    const link = ['weather-next-days-forecast'];
    this.route.navigate(link);
  }

  
}
