import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  apiLink = 'https://dataservice.accuweather.com/';

  constructor() { }
}
