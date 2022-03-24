import { Component, OnInit } from "@angular/core";
import { HeroService } from "@app/services";
import { Hero } from "@shared";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService
      .getHeroes()
      .subscribe((hero) => (this.heroes = hero.slice(1, 5)));
  }
}
