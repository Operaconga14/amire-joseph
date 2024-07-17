import { Component } from '@angular/core';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  zarclays: any;
  heirtrust: any;
  askit: any;

  active = 'zarclays'

}
