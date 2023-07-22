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
  Persona: CrearpersonaComponent;

  constructor() { }

  ngOnInit(): void {
  }

  crear(){
  const cliente = {
    ingresos: this.ingresos,
    persona: this.Persona
  };

  
  this.http.post('http://localhost:8080/crearcliente', cliente).subscribe((data: any) => {
    console.log(data);
  }, error => {
    console.error(error);
  });

  }

}
