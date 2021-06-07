import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-next-days-forecast',
  templateUrl: './weather-next-days-forecast.component.html',
  styleUrls: ['./weather-next-days-forecast.component.scss']
})
export class WeatherNextDaysForecastComponent implements OnInit {

  nextDays: any;

  firstDay: any;

  otherDays: any;

  userLat: any = 0;
  userLng: any = 0;

  location: any;

  constructor(private weatherservice: WeatherService, private locationservice: LocationService, private route: Router) { }

  ngOnInit(): void {
    this.getUserLocation();
    this.getCurrentHour();
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

        this.getNextDaysForecast();
      }
    );
  }

  getNextDaysForecast() {
    this.weatherservice.getNextDaysForecats(this.location.Key).subscribe(
      (response) => {
        

        this.nextDays = response.DailyForecasts;
        this.firstDay = response.DailyForecasts[1];
        
        this.nextDays.splice(0, 2);
        this.otherDays = this.nextDays;
        
      }
    );
  }

  getCurrentHour() {
    let dateTime = new Date();
    return dateTime.getHours();
    
  }

  isNight() {
    if(this.getCurrentHour() >= 12) {
      return true;
    }else {
      return false;
    }
  }

  goToIndex() {
    const link = [''];
    this.route.navigate(link);
  }

}
