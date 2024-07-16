import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amire-joseph';
}
