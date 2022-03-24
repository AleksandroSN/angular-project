import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "@app/services";
import { Hero } from "../../../shared/types/hero.model";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
