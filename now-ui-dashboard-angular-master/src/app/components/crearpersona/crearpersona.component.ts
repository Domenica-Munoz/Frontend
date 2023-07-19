import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.css']
})
export class CrearpersonaComponent implements OnInit {

  nombre1: string;
  apellido: string;
  correo: string;
  password: string;
  cedula: string;
  direccion: string;
  telefono: string;
  nombre: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  crear() {
   
    const persona = {
      nombre: this.nombre1 + ' ' + this.apellido,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password,
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono
    };

    this.http.post('http://localhost:8080/crearPersona', persona).subscribe((data: any) => {
      console.log(data);
    }, error => {
      console.error(error);
    });
  }

}
