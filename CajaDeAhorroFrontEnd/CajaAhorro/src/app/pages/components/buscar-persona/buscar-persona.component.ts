import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.scss']
})
export class BuscarPersonaComponent {
  nombre: string ="";
  apellido: string="";
  cedula: string="";
  
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
    console.log(this.cedula)
    this.http.get('http://localhost:8080/obtenerPersona/' + this.cedula  ).subscribe((data:any) => 
    {console.log(data)
      this.persona=data 
});

  }

  editarpersona(){
    this.http.post('http://localhost:8080/editarPersona', this.persona).subscribe((data:any)=>
    {console.log(data)});
  }
}
