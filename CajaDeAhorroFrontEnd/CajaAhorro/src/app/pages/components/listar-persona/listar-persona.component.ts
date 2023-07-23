import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.scss']
})
export class ListarPersonaComponent{

  listapersona: any;
  nombre1: string="";
  apellido: string="";
  correo: string="";
  password: string="";
  cedula: string="";
  direccion: string="";
  telefono: string=" ";
  nombre: string="";
 
    
  constructor(private http: HttpClient) { }
 

  ngOnInit(): void {
    this.listaper();
  }

  listaper(){
    const persona = {
      nombre: this.nombre1 + ' ' + this.apellido,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password,
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono
    };
   

    this.http.get('http://localhost:8080/listarPersonas').subscribe((data: any) => {
      console.log(data);
      this.listapersona=data;
    }, error => {
      console.error(error);
    });
}

}
