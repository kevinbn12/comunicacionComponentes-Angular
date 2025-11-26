import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Component1 } from '../component1/component1';
import { Component2 } from '../component2/component2';
import { CambioDeContenido } from '../cambio-de-contenido';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sena',
  imports: [Component1, Component2],
  templateUrl: './sena.html',
  styleUrl: './sena.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sena implements OnInit {
  constructor(private _cambioDeContenido: CambioDeContenido,
    private _cdr: ChangeDetectorRef
  ) { }

protected parrafoContenido2: string = ''
protected tituloContenido2: string = ''

ngOnInit(): void {
  this._cambioDeContenido.parrafocontenido2.subscribe((parrafoContenido2) => {
    this.parrafoContenido2 = parrafoContenido2
    this._cdr.detectChanges()
  })
  this._cambioDeContenido.titulo2.subscribe((titulo2) => {
    this.tituloContenido2 = titulo2
    this._cdr.detectChanges()
  })
}
}
