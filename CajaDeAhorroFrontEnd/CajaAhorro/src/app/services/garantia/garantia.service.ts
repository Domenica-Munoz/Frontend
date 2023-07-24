import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearGarantia(garantia: any){
    return this._http.post(`${this.url}/Garantia/crearGarantia`, garantia);
  }

  editarGarantia(garantia: any){
    return this._http.post(`${this.url}/Garantia/editarGarantia`, garantia);
  }

  buscarGarantia(id: any){
    return this._http.get(`${this.url}/Garantia/buscarGarantia/${id}`);
  }

  listarGarantias(){
    return this._http.get(`${this.url}/Garantia/listarGarantia`);
  }
}
