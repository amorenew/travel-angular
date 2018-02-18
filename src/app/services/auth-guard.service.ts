import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public userService : UserService, public router : Router) {}

  canActivate() : boolean {
    console.log('AuthGuard#canActivate called ' + this.userService.isAuthenticated);

    if (!this.userService.isAuthenticated) {
      console.log('not auth');
      this
        .router
        .navigate(['/signin']);
    }
    return this.userService.isAuthenticated;
  }

}
