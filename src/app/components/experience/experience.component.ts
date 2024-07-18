import { Component, inject } from '@angular/core';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { DetailsService } from '../../services/details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgbNavModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public detailsService = inject(DetailsService)

  zarclays: any;
  heirtrust: any;
  askit: any;
  experiences: any;

  active = 'heirtrust'

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.experiences = this.detailsService.companies
  }

}
