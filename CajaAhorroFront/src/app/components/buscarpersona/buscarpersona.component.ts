import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscarpersona',
  templateUrl: './buscarpersona.component.html',
  styleUrls: ['./buscarpersona.component.css']
})
export class BuscarpersonaComponent implements OnInit {
  nombre: string;
  apellido: string;
  cedula: string;
  
   persona = {
      nombre: null,
      apellido: null,
      correo: null,
      password: null,
      cedula: null,
      direccion: null,
      telefono: null
    };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  buscarpersona(){
    this.http.get('http://localhost:8080/obtenerPersona/' + this.cedula  ).subscribe((data:any) => 
    {console.log(data)
      this.persona=data 
      const nombres=this.persona.nombre.split(' ')
    this.persona.nombre=nombres[0]
    this.persona.apellido=nombres[1]
});

  }

  editarpersona(){
    this.http.post('http://localhost:8080/editarPersona', this.persona).subscribe((data:any)=>
    {console.log(data)});
  }

}
