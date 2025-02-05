import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Weather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  private apiKey:string = '1166c966696e1476229815c2a2da7f15'
  private api:string = 'http://api.openweathermap.org/data/2.5/weather'
  constructor(private http:HttpClient) { }

  getWheater(city:string){
    return this.http.get<Weather>(`${this.api}?q=${city},uk&APPID=${this.apiKey}`).pipe(take(1));
  }
}
