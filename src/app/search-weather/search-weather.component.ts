import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { NgForm } from '@angular/forms';
import { WEATHER_ITEMS } from '../item-weather/weather.data';
import { WeatherItem } from '../item-weather/weather-item';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {
  @Input('change') checked!: boolean;
  data: any = {
    main: {},
    isDay: true,
  }
  private searchStream = new Subject<string>();
  constructor(private _apiService: ApiServiceService){}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this._apiService.searchWeatherData(f.value.location)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0]?.description.toUpperCase(), Math.round(data.main.temp - 273.15), data.main.humidity, Math.round(data.main.temp_max - 273.15), Math.round(data.main.temp_min - 273.15), Math.round(data.main.feels_like - 273.15), data.sys.sunrise, data.sys.sunset)
          let index = WEATHER_ITEMS.findIndex(x => x.cityName == data.name)
          if (index === -1) {
            this._apiService.addWeatherItem(weatherItem)
          }
          else alert("This city has already exists! Find another city")
        }
      )
    console.log(this.data.sys.sunrise)
    console.log(this.data.sys.sunset)
  }

  onSearchLocation(cityName: string) {
    this._apiService.searchWeatherData(cityName)
      .subscribe(
        data => {
          this.data = data
        }
      )
  }
}
