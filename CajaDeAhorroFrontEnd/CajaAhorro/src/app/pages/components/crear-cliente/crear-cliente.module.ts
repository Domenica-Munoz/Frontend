import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrearClienteComponent } from './crear-cliente.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CrearClienteComponent}]),
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
  ]
})
export class CrearClienteModule { }
