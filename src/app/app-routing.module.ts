import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherIndexComponent } from './screens/weather-index/weather-index.component';
import { WeatherNextDaysForecastComponent } from './screens/weather-next-days-forecast/weather-next-days-forecast.component';

const routes: Routes = [
  {path: '', component: WeatherIndexComponent},
  {path: 'weather-next-days-forecast', component: WeatherNextDaysForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
