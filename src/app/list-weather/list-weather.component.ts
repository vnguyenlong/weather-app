import { Component, Input, OnInit } from '@angular/core';
import { WEATHER_ITEMS } from '../item-weather/weather.data';
import { WeatherItem } from '../item-weather/weather-item';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-list-weather',
  templateUrl: './list-weather.component.html',
  styleUrls: ['./list-weather.component.css'],
  animations: [
    trigger('weatherItems', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('500ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-15%)', offset: 0 }),
                style({
                  opacity: 0.8,
                  transform: 'translateY(10px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),

        query(
          ':leave',
          stagger('500ms', [
            animate(
              '.6s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({
                  opacity: 0.8,
                  transform: 'translateY(10px)',
                  offset: 0.3,
                }),
                style({ opacity: 0, transform: 'translateY(-15%)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ListWeatherComponent implements OnInit {
  @Input('change') checked!: boolean;
  weatherItems: WeatherItem[] = WEATHER_ITEMS;
  constructor() {}
  ngOnInit() {
    this.weatherItems = WEATHER_ITEMS;
    console.log(this.weatherItems);
    console.log(this.checked);
  }
  deleteWeatherItem(i: number) {
    this.weatherItems.splice(i, 1);
  }
}
