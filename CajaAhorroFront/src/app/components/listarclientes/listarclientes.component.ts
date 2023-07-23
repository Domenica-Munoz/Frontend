import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listarclientes',
  templateUrl: './listarclientes.component.html',
  styleUrls: ['./listarclientes.component.css']
  
})
export class ListarclientesComponent implements OnInit {

  listarclientes: any;
  ingresos: Float32Array;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
