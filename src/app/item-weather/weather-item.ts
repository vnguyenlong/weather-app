export class WeatherItem {
  constructor(public cityName: string, public description: string, public temperature: number, public humidity: number, public temp_max: number, public temp_min: number, public temp_feels_like: number, public sunRise: number,
      public sunSet: number) { }
}
