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
  appBackColor: string = '';
  backImg: string = "";

  constructor(private climaService: ClimaService) { }
  
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
  }

  getWeather(cityName: string) {
    
    this.climaService.getWeather(cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res
        },
        err => console.log(err)
      )
  }


  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value)
      cityName.value = '';
      this.fondoImg();
      
    } else {
      alert('Please, Inserte some values')
    }
    cityName.focus();
    // return false;
  }

  fondoImg() {
    if (parseInt(this.weather.main.temp) < 20) {
      this.backImg = "url('../assets/Img/cool.png')"
      
    } else if (parseInt(this.weather.main.temp) >= 20 && parseInt(this.weather.main.temp) < 25) {
      this.backImg = "url('../assets/Img/Day.png')"
      
    } else if (parseInt(this.weather.main.temp) >= 25) {
      this.backImg = "url('../assets/Img/hot.png')"
      
    }
  }



}
