import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaCompletadaDirective } from './directives/tarea-completada.directive';
import { PrioridadDirective } from './directives/prioridad.directive';
import { ResaltarPendientesDirective } from './directives/resaltar-pendientes.directive';

@NgModule({
  declarations: [
    AppComponent,
    TareaCompletadaDirective,
    PrioridadDirective,
    ResaltarPendientesDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
