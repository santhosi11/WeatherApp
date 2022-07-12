import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData (cityName:string):Observable<WeatherData>
  {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers:new HttpHeaders()
      .set(environment.rapidApiHostName,environment.rapidApiHostValue)
      .set(environment.rapidApiKeyName,environment.rapidApiKeyValue),
      params:new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')
    })
  }
}
