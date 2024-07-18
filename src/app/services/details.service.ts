import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public name: any;
  public occupation: any;
  public stack: any;
  public yoe: any;
  public projects: any;
  public reachOut: any;
  public experience: any;
  public companies: any;

  constructor() { }

  company = [
    {
      name: 'Zarclays',
      role: 'Full-Stack Developer',
      years: 'September 2021 - Present',
      details: `Built and maintained web applications (ZSwap, Zsale, Zarpay) using Angular (frontend) and Solidity (Hardhat) (backend/smart contracts).
Ensured secure and functional smart contract development for ZSwap, Zsale, and Zarpay.`
    },
    {
      name: 'Heirtrust',
      role: 'Full-Stack Developer',
      years: 'September 2022 - Present',
      details: `Developed and maintained secure web applications for managing wills and testaments, including file storage and cryptocurrency inheritance for next of kin.
Utilized Angular for a user-friendly and responsive frontend experience.
Implemented secure and robust smart contracts using Solidity (Hardhat) to facilitate secure file storage and crypto inheritance functionalities.`
    },
    {
      name: 'Askit',
      role: 'Coding Tutor and Web Desiner',
      years: 'August 2021 - 2022',
      details: `Developed engaging and educational applications for children using Scratch, a beginner-friendly programming language.
Provided website hosting solutions and designed user-friendly interfaces using WordPress.`
    }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showCompanies()
  }

  showCompanies() {
    this.companies = this.company
    console.log(this.companies)
  }

}
