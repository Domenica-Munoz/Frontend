import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SolicitudCreditoService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearSolicitudCredito(solicitudCredito: any){
    return this._http.post(`${this.url}/SolicitudCredito/crearSolicitud`, solicitudCredito);
  }

  editarSolicitudCredito(solicitudCredito: any){
    return this._http.post(`${this.url}/SolicitudCredito/editarSolicitud`, solicitudCredito);
  }

  obtenerSolicitudCredito(id: any){
    return this._http.get(`${this.url}/SolicitudCredito/obtenerSolicitud/${id}`);
  }

  listarSolicitudes(){
    return this._http.get(`${this.url}/SolicitudCredito/listarSolicitudes`);
  }
}
