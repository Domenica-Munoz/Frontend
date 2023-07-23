import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent {

  [x: string]: any;

  ingresos: number=0.00;
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

  crear(){
      const cliente = {
        ingresos: this.ingresos,
        persona: this.persona
      };
      
      console.log(cliente);
      
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
    
});

}
}
