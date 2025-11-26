import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CambioDeContenido {
  private listaContenido: string[] = []
  private tituloContenido: string = ''
  private tituloContenido2: string = ''
  private parrafoContenido2:string = ''

  private _contenido = new BehaviorSubject<Array<string>>(['home'])
  contenido: Observable<Array<string>> = this._contenido.asObservable()

  private _titulo = new BehaviorSubject<string>('home')
  titulo: Observable<string> = this._titulo.asObservable()

  private _titulo2 = new BehaviorSubject<string>('')
  titulo2: Observable<string> = this._titulo2.asObservable()

  private _parrafoContenido2 = new BehaviorSubject<string>('')
  parrafocontenido2: Observable<string> = this._parrafoContenido2.asObservable()

  cambiarContenido2(titulo2: string, parrafocontenido2: string) {
    this.tituloContenido2 = titulo2
    this._titulo2.next(this.tituloContenido2)
    this.parrafoContenido2 = parrafocontenido2
    this._parrafoContenido2.next(this.parrafoContenido2)
  }

  cambiarContenido(contenido: string[], titulo: string) {
    this.listaContenido = [...contenido]
    this._contenido.next(this.listaContenido)
    this.tituloContenido = titulo
    this._titulo.next(this.tituloContenido)
  }
}
