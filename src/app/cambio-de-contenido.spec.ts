import { TestBed } from '@angular/core/testing';

import { CambioDeContenido } from './cambio-de-contenido';

describe('CambioDeContenido', () => {
  let service: CambioDeContenido;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioDeContenido);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
