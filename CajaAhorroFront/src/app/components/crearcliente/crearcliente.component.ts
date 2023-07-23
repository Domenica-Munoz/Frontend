import { Component, OnInit } from '@angular/core';
import { CrearpersonaComponent } from '../crearpersona/crearpersona.component';
import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.css']
})
export class CrearclienteComponent implements OnInit {
  [x: string]: any;

  ingresos: Float32Array;
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

  crear(){
  const cliente = {
    ingresos: this.ingresos,
    persona: this.Persona
  };

  
  this.http.post('http://localhost:8080/crearCliente', cliente).subscribe((data: any) => {
    console.log(data);
  }, error => {
    console.error(error);
  });


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
}