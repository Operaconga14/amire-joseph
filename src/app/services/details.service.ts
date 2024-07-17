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

  constructor() { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
