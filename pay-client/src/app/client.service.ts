import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public http: Http) { }

  getAccountClient() {
    return this.http.get('http://localhost:8081/api/client');
  }
}
