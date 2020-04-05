import { TestBed } from '@angular/core/testing';

import { AWbGenericCrudService } from './a-wb-generic-crud.service';

describe('AWbGenericCrudService', () =>
{
  let service: AWbGenericCrudService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AWbGenericCrudService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
