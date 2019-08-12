import {Directive, HostListener, ElementRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   *
   * @param any $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    const posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }
    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra a função a ser chamada para atualizar o valor do model no evento change.
   *
   * @param any fn
   * @return void
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chamada para atualizar o valor do model no evento touched.
   *
   * @param any fn
   * @return void
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na model.
   *
   * @param any obj
   * @return void
   */
  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }

}
