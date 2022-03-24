import { Injectable } from "@angular/core";
// import { HEROES } from "./hero.mocks";
import { Hero } from "@shared";
import { Observable } from "rxjs";
import { HttpService } from "../http-service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private httpService: HttpService) {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.log("fetched heroes");
  //   return heroes;
  // }

  // getHero(id: number): Observable<Hero> {
  //   const hero = HEROES.find((hero) => hero.id === id)!;
  //   this.log(`fetched hero id=${id}`);
  //   return of(hero);
  // }
  getHeroes(): Observable<Hero[]> {
    return this.httpService.getAll<Hero>("fetched heroes", "get heroes");
  }

  getHero(id: number): Observable<Hero> {
    return this.httpService.get(
      `fetched hero id=${id}`,
      `getHero id=${id}`,
      id
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this.httpService.find(term);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpService.update(
      `updated hero id=${hero.id}`,
      "updateHero",
      hero
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpService.add(
      `Created Hero id=${hero.id}`,
      "createHero",
      hero
    );
  }

  deleteHero(id: number): Observable<Hero> {
    return this.httpService.delete(`deleted hero id=${id}`, "deleteHero", id);
  }
}
