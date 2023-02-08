import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { WeatherItem } from './item-weather/weather-item';
import { WEATHER_ITEMS } from './item-weather/weather.data';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) {}

  getWeatherItems(){
    return WEATHER_ITEMS
  }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem)
  }

  searchWeatherData(cityName: string): Observable<any>{
    return this._http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=bde239cc6beb42a8a337d58a73b3e7b6')
    .pipe(catchError((err) => {
      console.error(err);
      return throwError(err);
    }))
  }
}
