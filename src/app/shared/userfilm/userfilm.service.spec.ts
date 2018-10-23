import { TestBed } from '@angular/core/testing';

import { UserfilmService } from './userfilm.service';

describe('UserfilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfilmService = TestBed.get(UserfilmService);
    expect(service).toBeTruthy();
  });
});
