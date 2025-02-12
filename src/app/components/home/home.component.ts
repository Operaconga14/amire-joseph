import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { BannerComponent } from "../banner/banner.component";
import { ServicesComponent } from "../services/services.component";
import { ShortPortfolioComponent } from "../short-portfolio/short-portfolio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ServicesComponent, ShortPortfolioComponent, BannerComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
