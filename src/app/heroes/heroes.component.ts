import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heros: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) {}


  getHeroes(): void{
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
