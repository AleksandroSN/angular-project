import { Component, OnInit } from "@angular/core";
import { Hero } from "@shared";
import { HeroService, MessageService } from "@app/services";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) return;
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter((h) => h.id !== hero.id);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
