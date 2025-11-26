import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'; 
import { CambioDeContenido } from '../cambio-de-contenido';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1{
  constructor(private _cambioDeContenido: CambioDeContenido,
    private _cdr: ChangeDetectorRef
  ) {}

  protected home: Array<string> = ['Sena presentacion', 'Ficha 3066474', 'Ficha 3333333', 'Cuarta opcion'];
  protected search: Array<string> = ['Busqueda'];
  protected html: Array<string> = ['HTML', 'CSS', 'JS'];

seleccionarContenido(contenidoSeleccionado: string) {
  if(contenidoSeleccionado === 'home') {
    this._cambioDeContenido.cambiarContenido(this.home, 'Home')
    this._cdr.detectChanges()
  } else if(contenidoSeleccionado === 'search') {
    this._cambioDeContenido.cambiarContenido(this.search, 'Search')
    this._cdr.detectChanges()
  } else if(contenidoSeleccionado === 'html') {
    this._cambioDeContenido.cambiarContenido(this.html, 'HTML')
    this._cdr.detectChanges()
  }
}


}
