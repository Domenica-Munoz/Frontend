import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url = environment.url_api
  constructor(private _http: HttpClient) { }

  obtenerEstadoCuenta(header:any){
    return this._http.get(`${this.url}/api/estadoCuenta`, header);
  }

  obtenerEstadoCuentaPorCuenta(cuenta: any){
    return this._http.post(`${this.url}/api/estadoCuenta/`, cuenta);
  }

  obtenerEstadoCuentaPorId(id: any){
    return this._http.get(`${this.url}/api/estadoCuenta/${id}`);
  }
}
