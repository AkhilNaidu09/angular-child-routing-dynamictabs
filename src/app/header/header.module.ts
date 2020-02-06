import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: "",
        component: HeaderComponent,
        children: [
          { path: "", redirectTo: "home" },
          { path: "home", component: HomeComponent, data: { label: "Home" } },
          { path: "food", loadChildren: "./food/food.module#FoodModule",data: { label: "Food" }  }
        ]
      }
    ])
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ]
})
export class HeaderModule {}
