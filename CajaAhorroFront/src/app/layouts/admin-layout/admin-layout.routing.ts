import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CrearpersonaComponent } from '../../components/crearpersona/crearpersona.component';
import { CrearclienteComponent } from '../../components/crearcliente/crearcliente.component';
import { ListarpersonasComponent } from '../../components/listarpersonas/listarpersonas.component';
import { BuscarpersonaComponent } from '../../components/buscarpersona/buscarpersona.component';
import { Component } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'crearPersona',   component: CrearpersonaComponent },
    {path: 'crearCliente',    component:CrearclienteComponent},    
    {path: 'listarPersona',    component:ListarpersonasComponent},
    {path: 'buscarPersona',    component: BuscarpersonaComponent}
];
