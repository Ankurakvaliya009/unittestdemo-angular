import { Component, OnInit } from '@angular/core';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit{

  heroes : [] = [];
  isOn = false;

  constructor(){
  }

  ngOnInit(): void {

  }

  clicked(){
    this.isOn = !this.isOn;
  }

  get Message(){
    return  `The light is ${this.isOn ? 'On':'Off'}`
  }

}
