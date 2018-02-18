import {Component, OnInit} from '@angular/core';
import {UserApi} from '../user-api';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({selector: 'fw-sign-in', templateUrl: './sign-in.component.html', styleUrls: ['./sign-in.component.scss']})
export class SignInComponent implements OnInit {

  formError : string;
  submitting = false;

  constructor(public userApi : UserApi, public router : Router) {}

  ngOnInit() {}

  onSubmit(signInForm : NgForm) {
    if (signInForm.valid) {
      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this
        .userApi
        .signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
          console.log('got valid: ', data);
          this
            .router
            .navigate(['/authenticated']);
        }, (err) => {
          this.submitting = false;
          console.log('got error: ', err);
          this.formError = err;
        });
    }

  }

}
