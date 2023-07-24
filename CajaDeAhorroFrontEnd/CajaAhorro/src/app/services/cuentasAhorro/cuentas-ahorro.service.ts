import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CuentasAhorroService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  listarCuentasAhorro(){
    return this._http.get(`${this.url}/cuentas-ahorro`);
  }

  crearCuentaAhorro(cuentaAhorro: any){
    return this._http.post(`${this.url}/crearCuenta`, cuentaAhorro);
  }

  listarCuenta(){
    return this._http.get(`${this.url}/listarCuenta`);
  }
}
