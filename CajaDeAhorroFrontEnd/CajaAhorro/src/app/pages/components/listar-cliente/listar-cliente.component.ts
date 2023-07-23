import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent {
  
  listaClientes:any
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listaper();
  }

  listaper(){
    this.http.get('http://localhost:8080/listarClientes').subscribe((data: any) => {
      console.log(data);
      this.listaClientes=data;
    }, error => {
      console.error(error);
    });
  }

}
