import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkService } from './link.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private linkservice: LinkService, private http: HttpClient) { }

  getCurrentConditions(data: any): Observable<any> {
    return this.http.get<any>(this.linkservice.apiLink+'currentconditions/v1/'+data+'?apikey=	SZ2PsxC7GCe5kAYabZVjgqbc3yK1g4Au&details=true');
  }

  getGeoPosition(data: any):Observable<any> {
    return this.http.get<any>(this.linkservice.apiLink+'locations/v1/cities/geoposition/search?apikey=	SZ2PsxC7GCe5kAYabZVjgqbc3yK1g4Au&q='+data);
  }

  getOneDayForecast(data: any):Observable<any> {
    return this.http.get<any>(this.linkservice.apiLink+'forecasts/v1/daily/1day/'+data+'?apikey=	SZ2PsxC7GCe5kAYabZVjgqbc3yK1g4Au&details=true');
  }

  getTweleveHoursForecast(data: any):Observable<any> {
    return this.http.get<any>(this.linkservice.apiLink+'forecasts/v1/hourly/12hour/'+data+'?apikey=	SZ2PsxC7GCe5kAYabZVjgqbc3yK1g4Au&details=true&metric=true');
  }

  getNextDaysForecats(data: any):Observable<any> {
    return this.http.get<any>(this.linkservice.apiLink+'forecasts/v1/daily/5day/'+data+'?apikey=	SZ2PsxC7GCe5kAYabZVjgqbc3yK1g4Au&details=true&metric=true');
  }
}
