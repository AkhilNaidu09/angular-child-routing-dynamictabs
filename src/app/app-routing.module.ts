import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FoodComponent } from './../food/food.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'header' },
      { path: 'header', loadChildren: './header/header.module#HeaderModule' }
    
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }