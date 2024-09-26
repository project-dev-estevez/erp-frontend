import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanLoad {
    
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }
    
    canLoad(): boolean{
        if(this.authService.isLoggedIn()){
            //console.log('canActivate');
            return true;
        }
        this.router.navigate(['/auth/login']);
            //console.log('canActivate');
            return false;
    }

    canActivate(): boolean {

        if(this.authService.isLoggedIn()){
            //console.log('canActivate');
            return true;
        }
        this.router.navigate(['/auth/login']);
            //console.log('canActivate');
            return false;

        //throw new Error('Method not implemented.');
    }
    
}