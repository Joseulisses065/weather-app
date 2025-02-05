import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { Weather } from './../../models/weather.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weather!:Weather;
  
  minTempIcon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;



}
