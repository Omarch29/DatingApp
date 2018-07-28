/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlrtifyService } from './alrtify.service';

describe('Service: Alrtify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlrtifyService]
    });
  });

  it('should ...', inject([AlrtifyService], (service: AlrtifyService) => {
    expect(service).toBeTruthy();
  }));
});
