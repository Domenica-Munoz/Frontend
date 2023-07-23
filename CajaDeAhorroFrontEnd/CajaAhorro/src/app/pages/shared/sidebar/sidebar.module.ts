import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    NzIconModule,
    RouterModule,
    NzToolTipModule
  ]
})
export class SidebarModule { }
