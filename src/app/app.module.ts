import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherIndexComponent } from './screens/weather-index/weather-index.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherNextDaysForecastComponent } from './screens/weather-next-days-forecast/weather-next-days-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIndexComponent,
    HeaderComponent,
    WeatherNextDaysForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
