import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from './weather-item';
import { ApiServiceService } from '../api-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-weather',
  templateUrl: './item-weather.component.html',
  styleUrls: ['./item-weather.component.css']
})
export class ItemWeatherComponent implements OnInit {
  @Input('item') weatherItem!: WeatherItem;
  @Input('change') checked!: boolean;
  constructor(private apiService: ApiServiceService) { }
  ngOnInit(): void {

  }

  getDayNight() {

    // console.log(this.weatherItem.sunSet)
    if (this.weatherItem.sunRise < new Date().valueOf() / 1000 && new Date().valueOf() / 1000 < this.weatherItem.sunSet) {
      // console.log('Day Time');
      return true
    } else {
      // console.log('Night Time');
      return false
    }
  }
}
