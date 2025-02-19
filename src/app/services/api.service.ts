import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private http = inject(HttpClient);
  api_url = environments.api_url;

  async get(endpoint: string) {
    return this.http.get<any>(`${this.api_url}${endpoint}`);
  }

  async post(endpoint: string, body: any) {
    return this.http.post<any>(`${this.api_url}${endpoint}`, body);
  }
}
