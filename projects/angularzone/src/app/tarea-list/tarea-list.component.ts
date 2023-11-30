import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TareaListComponent {
  tareas: string[] = [];
  nuevaTarea: string = '';

  constructor(private cdRef: ChangeDetectorRef) {}

  agregarTarea() {
    if (this.nuevaTarea) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';

      // Marcar para la detección de cambios usando markForCheck
      this.cdRef.markForCheck();

      // Detectar cambios manualmente usando detectChanges
      this.cdRef.detectChanges();
    }
  }
}
