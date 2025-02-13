import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  currentRoute: string = '';

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.currentRoute = url.join('/');
      console.log("Current Route: ", this.currentRoute);

    });
  }

  shouldHideElement(): boolean {
    return this.currentRoute === ''; // Replace 'desired-route' with the route you want to match
  }

}
