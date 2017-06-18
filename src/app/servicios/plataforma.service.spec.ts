import { TestBed, inject } from '@angular/core/testing';

import { PlataformaService } from './plataforma.service';

describe('PlataformaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlataformaService]
    });
  });

  it('should ...', inject([PlataformaService], (service: PlataformaService) => {
    expect(service).toBeTruthy();
  }));
});
