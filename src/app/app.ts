import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItAlertComponent } from 'design-angular-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItAlertComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}