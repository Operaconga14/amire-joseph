import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm?: FormGroup;


  constructor() {
    this.contactForm = new FormGroup({
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      subject: new FormControl('', [Validators.required])
    });
  }

  onSendMessage() {
    console.log("Message Sent: ", this.contactForm?.value);
  }

}
