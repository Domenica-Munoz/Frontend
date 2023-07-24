import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearPrestamo(prestamo: any){
    return this._http.post(`${this.url}/Tprestamo/crearTPrestamo`, prestamo);
  }

  editarPrestamo(prestamo: any){
    return this._http.post(`${this.url}/Tprestamo/editarTPrestamo`, prestamo);
  }

  buscarPrestamo(id: any){
    return this._http.get(`${this.url}/Tprestamo/buscarTPrestamo/${id}`);
  }

  listarPrestamos(){
    return this._http.get(`${this.url}/Tprestamo/listar`);
  }
}
