import { TestBed } from '@angular/core/testing';

import { EstacaoService } from './estacao.service';

describe('EstacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacaoService = TestBed.get(EstacaoService);
    expect(service).toBeTruthy();
  });
});
