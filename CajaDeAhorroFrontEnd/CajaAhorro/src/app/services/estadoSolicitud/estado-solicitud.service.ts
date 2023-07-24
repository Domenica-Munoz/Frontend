import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearEstadoSolicitud(estadoSolicitud: any){
    return this._http.post(`${this.url}/EstadoSolicitud/crearEstadoSolicitud `, estadoSolicitud);
  }

  editarEstadoSolicitud(estadoSolicitud: any){
    return this._http.post(`${this.url}/EstadoSolicitud/editarEstadoSolicitud`, estadoSolicitud);
  }

  obtenerEstadoSolicitud(id: any){
    return this._http.get(`${this.url}/EstadoSolicitud/obtenerEstadoSolicitud/${id}`);
  } 
}
