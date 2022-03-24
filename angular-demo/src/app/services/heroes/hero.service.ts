import { Injectable } from "@angular/core";
import { HEROES } from "./hero.mocks";
import { Hero } from "@shared/types/hero.model";
import { Observable, of } from "rxjs";
import { MessageService } from "../messages";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
