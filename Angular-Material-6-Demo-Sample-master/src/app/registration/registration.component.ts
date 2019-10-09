import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private router: Router ) { }
  formSubmitted = false;
  registerFormData: FormGroup;
  ngOnInit() {
    this.registerFormData = this.formBuilder.group({
      password: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }
  get f() { return this.registerFormData.controls; }

  register() {
    this.formSubmitted = true;
    if (this.registerFormData.invalid) {
      return;
    }
    this.router.navigate(['/login']);
  }
}
