import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm?: FormGroup;
  result: any;

  private apiService = inject(ApiService);

  constructor() {
    this.contactForm = new FormGroup({
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      subject: new FormControl('', [Validators.required])
    });
  }

  async onSendMessage() {
    // console.log("Message Sent: ", this.contactForm?.value);
    (await this.apiService.post("email/receive", this.contactForm?.value)).subscribe((data) => {
      this.result = data.email.message;

      // setTimeout(() => {
      //   this.result = '';
      // }, 50000);
    });
  }

}
