import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.scss']
})
export class BuscarClienteComponent {
  
  cedula:string=""
  cliente = {
    id: "",
    ingresos: "",
    persona: {
        id: "",
        nombre: "",
        correo: "",
        password: "",
        cedula: "",
        direccion: "",
        telefono: ""
    },
    "banco": null
  };
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  buscarCliente(){
    this.http.get('http://localhost:8080/obtenerCliente/'+this.cedula).subscribe((data: any) => {
      console.log(data);
      this.cliente=data;
    }, error => {
      console.error(error);
    });
  }
  editarCliente(){
    this.http.post('http://localhost:8080/editarCliente',this.cliente).subscribe((data: any) => {
      console.log(data);
    }, error => {
      console.error(error);
    });
  }
}
