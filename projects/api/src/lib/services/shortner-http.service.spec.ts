import { TestBed } from '@angular/core/testing'; 
import { ShortnerHttpService } from './shortner-http.service';
 

describe('ShortnerHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortnerHttpService = TestBed.get(ShortnerHttpService);
    expect(service).toBeTruthy();
  });
});
