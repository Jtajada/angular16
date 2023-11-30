import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tareas = [
    {
      descripcion: 'Hacer compras',
      completada: false,
      prioridad: 'alta',
      pendiente: true,
    },
    {
      descripcion: 'Estudiar Angular',
      completada: true,
      prioridad: 'media',
      pendiente: false,
    },
    {
      descripcion: 'Llevar el auto al taller',
      completada: false,
      prioridad: 'baja',
      pendiente: true,
    },
  ];
}
