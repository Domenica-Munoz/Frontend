import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearPersona(persona: any){
    return this._http.post(`${this.url}/crearPersona`, persona);
  }

  obtenerPersona(cedula:any){
    return this._http.get(`${this.url}/obtenerPersona/${cedula}`);
  }

  listarPersonas(){
    return this._http.get(`${this.url}/listarPersonas`);
  }

  editarPersona(persona: any){
    return this._http.post(`${this.url}/editarPersona`, persona);
  }
}
