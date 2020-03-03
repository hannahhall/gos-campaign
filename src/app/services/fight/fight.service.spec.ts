import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FightService } from './fight.service';
import { UserService } from '../user/user.service';

describe('FightService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ UserService ]
  }));

  it('should be created', () => {
    const service: FightService = TestBed.get(FightService);
    expect(service).toBeTruthy();
  });
});
