import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SignUpService} from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: any;

  constructor(private formBuilder: FormBuilder, private signUpService: SignUpService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      username: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.signUpService.createAccount(this.signUpForm.value).subscribe();
  }
}
