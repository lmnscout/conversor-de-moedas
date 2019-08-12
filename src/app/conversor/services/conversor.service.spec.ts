import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientModule
      ]
    }));

  it('should be created', () => {
    const service: ConversorService = TestBed.get(ConversorService);
    expect(service).toBeTruthy();
  });
});
