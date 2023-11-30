// Contenido a desarrollar (Pendiente ampliación):
// - Creación de componentes de Login y registro: deben ir fuertemente tipados (Aplicar tema 3)
// - Crear una estructura cabeceras y menús, de momento se accede a todo.
// - Crear una nueva aplicación, llamada Backend (Tema 17 WorkSpace)
// - Creación de carpeta directivas: Crear una carpeta directivas y añadir una directiva de atributo simple (Tema 2)
// - Decidir cómo almacenar los datos (Que sistema de base de datos usarás, se propone firebase datastore, puedes usar lo que quieras, como si quieres simularlo con datastore)
// - Una vez esta logado, aplicar un iterceptor, para añadir una cabecera o campos a todas las llamas http, llamada token o como quieras. (Tema 6)
// - Usar un fake api, para cargar datos en un componente, haciendo uso de resolver. (Tema 7 y 5), dicho componente cargará de forma diferida

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practica';
}
