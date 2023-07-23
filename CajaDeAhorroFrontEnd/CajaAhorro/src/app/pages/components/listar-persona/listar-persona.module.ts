import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPersonaComponent } from './listar-persona.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    ListarPersonaComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    RouterModule.forChild([{path: '', component: ListarPersonaComponent}]),
    NzCardModule
  ]
})
export class ListarPersonaModule { }
