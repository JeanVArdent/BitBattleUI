import { TestBed } from "@angular/core/testing";
import { AuthGuard } from "./auth.guard";
import { ActivatedRouteSnapshot, GuardResult, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // describe('canActivate', () => {
  //   // THIS TEST IS TEMPORARY AND SHOULD BE REMOVED WHEN FUNCTIONALITY IS ADDED
  //   it('should return true in all cases', async () => {
  //     const response = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

  //     let result: GuardResult | undefined;
  //     if (response instanceof Observable) {
  //       result = await response.toPromise();
  //     } else if (response instanceof Promise) {
  //       result = await response;
  //     } else {
  //       result = response;
  //     }

  //     expect(result?.valueOf()).toBeTrue();
  //   });
  // });
});
