import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NpcService } from './npc.service';

describe('NpcService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: NpcService = TestBed.get(NpcService);
    expect(service).toBeTruthy();
  });
});
