import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FoodComponent } from './food.component';
import { CheeseComponent } from './cheese/cheese.component';
import { ChickenComponent } from './chicken/chicken.component';
import {FoodRoutingModule} from './food-routing.module.ts'

@NgModule({
  imports: [ CommonModule, MatTabsModule,RouterModule, FoodRoutingModule ],
  declarations: [  FoodComponent, CheeseComponent, ChickenComponent ]
})
export class FoodModule { }
