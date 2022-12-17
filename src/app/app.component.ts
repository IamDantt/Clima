import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Clima';
  
  weather: any;

  constructor(private climaService: ClimaService){}   

  ngOnInit(){
    
  }

  getWeather(cityName: string){
    this.climaService.getWeather(cityName)
      .subscribe(
        res => {
        console.log(res);
        this.weather= res
        },        
        err => console.log(err)
      )
  }
  
  submitLocation(cityName: HTMLInputElement){
  // console.log(cityName);
  if(cityName.value){
    this.getWeather(cityName.value)
    cityName.value = '';    
  } else  {
    alert('Please, Inserte some values')
  }  cityName.focus();
  
  return false;
  }



}
