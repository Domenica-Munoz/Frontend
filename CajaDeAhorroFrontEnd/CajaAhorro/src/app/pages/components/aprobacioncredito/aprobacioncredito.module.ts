import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprobacioncreditoComponent } from './aprobacioncredito.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    AprobacioncreditoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AprobacioncreditoComponent}]),
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzSelectModule
  ]
})
export class AprobacioncreditoModule { }
