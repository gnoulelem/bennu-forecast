import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bennuforecast-app';

  theme: Theme = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {
    if(this.isNight()) {
      this.theme = 'dark-theme';
    }else {
      this.theme = 'light-theme';
    }

    this.initializeTheme();

  }

  initializeTheme = (): void => 
      this.renderer.addClass(this.document.body, this.theme);

  
  getCurrentHour() {
    let dateTime = new Date();
    return dateTime.getHours();
  }

  isNight() {
    if(this.getCurrentHour() >= 18 && this.getCurrentHour() <= 6) {
      return true;
    }else {
      return false;
    }
  }

}

export type Theme = 'light-theme' | 'dark-theme';