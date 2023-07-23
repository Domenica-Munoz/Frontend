import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearPersonaComponent } from './pages/components/crear-persona/crear-persona.component';
import { SidebarModule } from './pages/shared/sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
