import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs/Rx';

// import of from 'rxjs/add/observable/of';
import {UserApi} from '../../framework/users/user-api';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;

  constructor(public router:Router) {}

  signIn(username : string, password : string, rememberMe : boolean) : Observable < any > {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    console.log('UserService.signIn: Delay 2000ms');
    return Observable.of({}).delay(2000);
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalide username and/or password'));
  }

  signOut() : Observable < any > {
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    console.log('UserService.signOut: Delay 2000ms');
    return Observable.of({}).delay(2000);
  }

}
