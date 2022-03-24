import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent,
} from "@app/components";

const routes: Routes = [
  {
    path: "heroes",
    component: HeroesComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "heroes/:id",
    component: HeroDetailComponent,
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
