import { TestBed, inject } from '@angular/core/testing';

import { FrameworkConfigService } from './framework-config.service';

describe('FrameworkConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameworkConfigService]
    });
  });

  it('should be created', inject([FrameworkConfigService], (service: FrameworkConfigService) => {
    expect(service).toBeTruthy();
  }));
});
