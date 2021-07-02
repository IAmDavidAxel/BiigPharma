import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  formData: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      username: new FormControl('admin'),
      password: new FormControl('admin'),
    });
  }

  onClickSubmit(data: any): void {
    this.username = data.username;
    this.password = data.password;

    // tslint:disable-next-line:no-shadowed-variable
    this.authService.login(this.username, this.password).subscribe(data =>
    {
    console.log('Is Login Success' + data);
    if (data) { this.router.navigate(['/profile']); }
    });
  }


}
