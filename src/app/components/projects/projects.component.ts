import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DetailsService } from '../../services/details.service';

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

  detailsService = inject(DetailsService);
  projects: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showFeaturedProject();
    this.showPersonalProject();
  }

  showFeaturedProject() {
    this.projects = this.detailsService.projects;
  }

  showPersonalProject() {
    this.projects = this.detailsService.projects;
  }
}
