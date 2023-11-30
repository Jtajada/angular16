import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTareaCompletada]',
})
export class TareaCompletadaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set appTareaCompletada(completada: boolean) {
    if (completada) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'text-decoration',
        'line-through'
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
    }
  }
}
