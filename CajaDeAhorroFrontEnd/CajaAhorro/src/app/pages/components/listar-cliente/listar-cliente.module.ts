import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClienteComponent } from './listar-cliente.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    ListarClienteComponent
  ],
  imports: [
    CommonModule,                      
    NzTableModule,
    RouterModule.forChild([{path: '', component: ListarClienteComponent}]),
    NzCardModule
  ]
})
export class ListarClienteModule { }
