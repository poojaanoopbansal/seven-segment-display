import { TestBed } from '@angular/core/testing';

import { NumberParserService } from './number-parser.service';

describe('NumberParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberParserService = TestBed.get(NumberParserService);
    expect(service).toBeTruthy();
  });
});
