import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should allowed logged user to access page', () => {
    service.canLoad().subscribe(isAllowed => {
      expect(isAllowed).toBeTruthy();
    });
  });
});
