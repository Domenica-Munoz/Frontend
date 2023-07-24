import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearPago(pago: any){
    return this._http.post(`${this.url}/Pagos/crearPago`, pago);
  }

  editarPago(pago: any){
    return this._http.post(`${this.url}/Pagos/editarPago`, pago);
  }

  obtenerPago(id: any){
    return this._http.get(`${this.url}/Pagos/obtenerPago/${id}`);
  }

  listarCreditos(){
    return this._http.get(`${this.url}/Pagos/listarCreditos`);
  }
}
