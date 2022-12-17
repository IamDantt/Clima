import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey = '92f65dd45d82f9d2419f1dbf7204f4d3';
  URI: String = '';
  constructor(private httpClient: HttpClient) { 
    
      this.URI =`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;


  }

  getWeather(cityName: string){
     return this.httpClient.get(`${this.URI}${cityName}`);
  }

}
