import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'persona/crear', loadChildren:() => import('../app/pages/components/crear-persona/crear-persona.module').then(m => m.CrearPersonaModule)
  },
  {
    path: 'persona/listar', loadChildren:() => import('../app/pages/components/listar-persona/listar-persona.module').then(m => m.ListarPersonaModule)
  },
  {
    path: 'persona/buscarActualizar', loadChildren:() => import('../app/pages/components/buscar-persona/buscar-persona.module').then(m => m.BuscarPersonaModule)
  },
  {
    path: 'cliente/crear', loadChildren:() => import('../app/pages/components/crear-cliente/crear-cliente.module').then(m => m.CrearClienteModule)
  },
  {
    path: 'cliente/listar', loadChildren:() => import('../app/pages/components/listar-cliente/listar-cliente.module').then(m => m.ListarClienteModule)
  },
  {
    path: 'cliente/buscar', loadChildren:() => import('../app/pages/components/buscar-cliente/buscar-cliente.module').then(m => m.BuscarClienteModule)
  },
  {
    path: 'solicitudcredito', loadChildren:() => import('../app/pages/components/solicitudcredito/solicitudcredito.module').then(m => m.SolicitudcreditoModule)
  },
  {
    path: 'aprobacioncredito', loadChildren:() => import('../app/pages/components/aprobacioncredito/aprobacioncredito.module').then(m => m.AprobacioncreditoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
