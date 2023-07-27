import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudcreditoComponent } from './solicitudcredito.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    SolicitudcreditoComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SolicitudcreditoComponent}]),
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule
    
  ]
})
export class SolicitudcreditoModule { }
