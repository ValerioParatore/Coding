import { Component } from '@angular/core';
import { IWeatherData } from 'src/app/models/weather.models';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  weatherData!: IWeatherData

  constructor(private weatherSvc: WeatherService){}

  ngOnInit():void{
    this.weatherSvc.getWeatherData('Wellington')
    .subscribe({
      next: (res)=>{
        this.weatherData = res
        console.log(res);

      }
    })
  }
}
