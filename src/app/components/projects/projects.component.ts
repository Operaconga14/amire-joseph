import { Component, inject } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  personalProjects: any;
  featuredProjects: any;

  detailsService = inject(DetailsService)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showFeaturedProject()
    this.showPersonalProject()
  }

  showFeaturedProject() {
    this.featuredProjects = this.detailsService.featureProject
  }

  showPersonalProject() {
    this.personalProjects = this.detailsService.personalProject
  }
}
