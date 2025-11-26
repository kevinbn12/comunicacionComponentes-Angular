import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { CambioDeContenido } from '../cambio-de-contenido';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component2 {
  constructor(private _cambioDeContenido: CambioDeContenido,
    private _cdr: ChangeDetectorRef
  ) { }

  protected contenido: Array<string> = []
  protected titulo: string = ''

  ngOnInit(): void {
    this._cambioDeContenido.contenido.subscribe((contenido) => {
      this.contenido = contenido
      this._cdr.detectChanges()
    })
    this._cambioDeContenido.titulo.subscribe((titulo) => {
      this.titulo = titulo
      this._cdr.detectChanges()
    })
  }

  seleccionarContenido2(titulo2: string) {
    if(titulo2 === 'Sena presentacion') {
    this._cambioDeContenido.cambiarContenido2('Sena presentacion', 'Descripcion del sena')
    this._cdr.detectChanges()
  } else if(titulo2 === 'Ficha 3066474') {
    this._cambioDeContenido.cambiarContenido2('Ficha 3066474', 'Descripcion de la ficha 3066474')
    this._cdr.detectChanges()
  } else if(titulo2 === 'Ficha 3333333') {
    this._cambioDeContenido.cambiarContenido2('Ficha 3333333', 'Descripcion de la ficha 3333333')
    this._cdr.detectChanges()
  } else if(titulo2 === 'Cuarta opcion') {
    this._cambioDeContenido.cambiarContenido2('Cuarta opcion', 'Descripcion de la cuarta opcion')
    this._cdr.detectChanges()
  } else if(titulo2 === 'Busqueda') {
    this._cambioDeContenido.cambiarContenido2('Busqueda', 'Descripcion de la busqueda')
    this._cdr.detectChanges()
  } else if(titulo2 === 'HTML') {
    this._cambioDeContenido.cambiarContenido2('HTML', 'Descripcion de la HTML')
    this._cdr.detectChanges()
  } else if(titulo2 === 'CSS') {
    this._cambioDeContenido.cambiarContenido2('CSS', 'Descripcion de la CSS')
    this._cdr.detectChanges()
  } else if(titulo2 === 'JS') {
    this._cambioDeContenido.cambiarContenido2('JS', 'Descripcion de la JS')
    this._cdr.detectChanges()
  } 
  }
}
