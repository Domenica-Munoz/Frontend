import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearCliente(cliente: any){
    return this._http.post(`${this.url}/crearCliente`, cliente);
  }

  obtenerCliente(cedula:any){
    return this._http.get(`${this.url}/obtenerCliente/${cedula}`);
  }

  listarClientes(){
    return this._http.get(`${this.url}/listarClientes`);
  }

  editarCliente(cliente: any){
    return this._http.post(`${this.url}/editarCliente`, cliente);
  }

}
