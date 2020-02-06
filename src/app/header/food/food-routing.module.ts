import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodComponent } from "./food.component";
import { CheeseComponent } from "./cheese/cheese.component";
import { ChickenComponent } from "./chicken/chicken.component";

export const routes: Routes = [
  {
    path: "",
    component: FoodComponent,
    children: [
      { path: "", redirectTo: "cheese", pathMatch: "full" },
      { path: "cheese", component: CheeseComponent, data: { label: "Cheese" } },
      {
        path: "chicken",
        component: ChickenComponent,
        data: { label: "Chicken" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FoodRoutingModule {}
