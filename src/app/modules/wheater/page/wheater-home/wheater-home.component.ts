import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/models/weather.interface';
import { WheaterService } from 'src/app/service/wheater.service';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: ['./weather-home-component.scss'],
})
export class WheaterHomeComponent implements OnInit {
  initialCityName:string = 'London';
  wheaterData!: Weather;
  searchIcon = faMagnifyingGlass;
  constructor(private service: WheaterService) {}

  ngOnInit(): void {
    this.getWheater(this.initialCityName);
  }

  getWheater(city: string) {
    this.service.getWheater(city).subscribe({
      next: (v) => {
        this.wheaterData = v;
        console.log(this.wheaterData)
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  onSubmit()
  {
    this.getWheater(this.initialCityName)
    this.initialCityName = '';
  }
}
