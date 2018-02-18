import {Observable} from 'rxjs/observable';

export abstract class UserApi {
    signIn : (username : string, password : string, rememberMe : boolean) => Observable < any >;
    // signOut: changePassword:
}