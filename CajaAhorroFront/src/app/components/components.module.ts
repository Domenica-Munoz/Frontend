import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CrearpersonaComponent } from './crearpersona/crearpersona.component';
import { CrearclienteComponent } from './crearcliente/crearcliente.component';
import { ListarpersonasComponent } from './listarpersonas/listarpersonas.component';
import { ListarclientesComponent } from './listarclientes/listarclientes.component';
import { BuscarpersonaComponent } from './buscarpersona/buscarpersona.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CrearpersonaComponent,
    CrearclienteComponent,
    ListarpersonasComponent,
    ListarclientesComponent,
    BuscarpersonaComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CrearpersonaComponent,
    CrearclienteComponent
  ]
})
export class ComponentsModule { }
