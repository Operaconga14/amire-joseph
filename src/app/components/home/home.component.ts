import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DetailsService } from '../../services/details.service';
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

  skills: any;

  detailsService = inject(DetailsService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showSkills();
  }

  showSkills() {
    this.skills = this.detailsService.skills
  }

}
