import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {

}
