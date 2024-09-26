import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanLoad
{

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    return true;
    // return this.authService.checkToken().pipe(
    //   tap( isAuth => {
    //     if(!isAuth)
    //     {
    //       this.router.navigate(['/auth']);
    //     }
    //   })
    // );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    return true;
     //return this.authService.checkToken().pipe(
       //tap( isAuth => {
         //if(!isAuth)
         //{
          // this.router.navigate(['/auth']);
         //}
       //})
     //);
  }
}
