
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { WeatherConditions } from './weather/weather-conditions';
import { IwundergroundSettings } from './weather/Iwunderground.settings';
import { WUNDERGROUND_SETTINGS } from './weather/WundergroundSettings.const';

@Injectable()
export class WeatherService {
  apiSettings:IwundergroundSettings
  base_url = 'http://api.wunderground.com/api/';
  conditions_endpoint = '/conditions/q/';
  search_endpoint='http://localhost:8100/search/aq?query=';


  constructor(public http: Http) {
    this.apiSettings   = WUNDERGROUND_SETTINGS;
  }

  getConditions(id?:string, state?: string,city?:string){
    if (id){
      console.log(`Searching for an ID: ${id}`)
      return this.http.get(`${this.base_url}/${this.apiSettings.api_key}/${this.conditions_endpoint}/${id}`)
        .map(res => res.json());
    } else if (state && city){
      console.log(`Searching for an state: ${state}, city:${city}`)
      return this.http.get(`${this.base_url}/${this.apiSettings.api_key}/${this.conditions_endpoint}/${state}/${city}.json`)
        .map(res => res.json());
    }
    console.log(`Search INVALID ${id}, ${state}, ${city}`)
    return undefined
  }
  
  searchCities(searchText){
    if(searchText){
    return this.http.get(`${this.search_endpoint}${searchText}`)
      .map(res => res.json());
} 
return undefined
  }

}
