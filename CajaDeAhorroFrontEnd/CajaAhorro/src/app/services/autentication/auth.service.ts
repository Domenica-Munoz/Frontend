import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url_api;

  constructor(private _http: HttpClient) { 

  }

  login(persona: any){
    return this._http.post(`${this.url}/api/login`, persona);
  }
}
