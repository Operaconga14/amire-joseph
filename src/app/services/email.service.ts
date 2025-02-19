import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  private apiService = inject(ApiService);
}
