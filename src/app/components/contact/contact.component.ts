import { Component, inject } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios'
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socialHandles: any
  api_url = "https://my-email-api.vercel.app/v1/email"
  emailGroup: FormGroup

  private detailServices = inject(DetailsService)
  private http = inject(HttpClient)

  constructor() {
    this.emailGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.min(6)]),
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showSocialPages()
  }

  showSocialPages() {
    this.socialHandles = this.detailServices.socials
  }

  async emailMe() {
    if (this.emailGroup.valid) {
      this.http.post(this.api_url, this.emailGroup.value)
        .subscribe(data => {
          console.log('Email sent successfully', data);
        },
          error => {
            console.error('Error sending email', error);
          })
    }
  }
}

// axios.post(this.api_url, this.emailGroup.value)
//         .then(data => {
//           console.log('Message sent successfully!!!', data)
//         })
//         .catch(error => {
//           console.error('Message not sent', error)
//         })
