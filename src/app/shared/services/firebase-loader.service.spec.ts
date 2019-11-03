import { TestBed } from '@angular/core/testing';

import { FirebaseLoaderService } from './firebase-loader.service';

describe('FirebaseLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseLoaderService = TestBed.get(FirebaseLoaderService);
    expect(service).toBeTruthy();
  });
});
