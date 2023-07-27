import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aprobacioncredito',
  templateUrl: './aprobacioncredito.component.html',
  styleUrls: ['./aprobacioncredito.component.scss']
})
export class AprobacioncreditoComponent {
  listasolicitud: any;
  id: string="";
  monto: number=0;
  cuenta: string="";
  garantias: string="";
  tipoPrestamo: string="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listasol();
  }

  listasol(){
    const solicitud = {
      id: this.id,
      monto: this.monto,
      cuenta: this.cuenta,
      garantias: this.garantias,
      tipoPrestamo: this.tipoPrestamo
    };

    this.http.get('http://localhost:8080/listarSolicitudes').subscribe((data: any) => {
      console.log(data);
      this.listasolicitud=data;
    }, error => {
      console.error(error);
    });

  }



}
