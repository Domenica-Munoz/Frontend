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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
