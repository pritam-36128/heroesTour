import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroSerive: fetched')
    return heros;
  }

  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroSerive: fetched hero id=${id}`)
    return of(hero);
  }
}
