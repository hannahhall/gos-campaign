import { TestBed } from '@angular/core/testing';

import { BlogStore } from './blog-store.service';

describe('BlogStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogStore = TestBed.get(BlogStore);
    expect(service).toBeTruthy();
  });
});
