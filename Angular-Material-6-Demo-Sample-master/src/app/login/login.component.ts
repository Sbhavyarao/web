import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  constructor( private formBuilder: FormBuilder , private router: Router ) { }
  formSubmitted = false;
  loginFormData: FormGroup;
  ngOnInit() {
    this.loginFormData = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginFormData.controls; }
  loginUser() {
    this.formSubmitted = true;
    if (this.loginFormData.invalid) {
      return;
    }
    this.router.navigate(['/', 'dashboard']);
  }
}
