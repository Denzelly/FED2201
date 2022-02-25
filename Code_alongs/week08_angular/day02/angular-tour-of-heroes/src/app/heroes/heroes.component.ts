import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // --1-- hero: string = "Windstorm"
  // --2-- hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // Defines an array pulled in from mock-data to be used inside components HTML
  heroes = HEROES;
  // watch for the selection of any hero displayed in our HTML ul
  selectedHero?: Hero;

  
  constructor() {   
    
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
