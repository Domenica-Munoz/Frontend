import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AmortizacionService {

  url = environment.url_api;

  constructor(private _http: HttpClient) { }

  crearAmortizacion(amortizacion: any){
    return this._http.post(`${this.url}/TablaAmortizacion/crearTablaAmortizacion`, amortizacion);
  }

  editarAmortizacion(amortizacion: any){
    return this._http.post(`${this.url}/TablaAmortizacion/editarTablaAmortizacion`, amortizacion);
  }

  obtenerAmortizacion(id: any){
    return this._http.get(`${this.url}/TablaAmortizacion/obtenerTablaAmortizacion/${id}`);
  }
  
  listarAmortizaciones(){
    return this._http.get(`${this.url}/TablaAmortizacion/listarTablaAmortizacion`);
  }
}
