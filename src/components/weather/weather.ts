import { Observation } from '../../providers/Weather/weather-conditions';
import { WeatherConditions } from '../../providers/weather/weather-conditions';
import { WeatherService } from '../../providers/weather';
import { Component, OnInit } from '@angular/core';

/*
  Generated class for the Weather component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent implements OnInit {
  currentCondtions: Observation
  state: string
  city: string
  searchText: string;
  searchId:string;
  results: any;

  constructor(private wService: WeatherService) {
    this.state = 'CA'
    this.city = 'San_Francisco'
  }

  ngOnInit() {
    this.wService.getConditions(this.searchId,this.state, this.city).subscribe(con => {
      
      this.currentCondtions = con.current_observation
    });
  }

  getQuery() {
    this.wService.searchCities(this.searchText)
      .subscribe(res => { this.results = res.RESULTS });
  }


}
