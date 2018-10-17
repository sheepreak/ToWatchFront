import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  message: string;
  userid: string;
  authFail: boolean;


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.authFail = false;
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.http.post('http://localhost:8080/login',
          {'username': this.f.userid.value, 'password': this.f.password.value},
        { headers: new HttpHeaders().set('Content-Type', 'application/json') })
        .subscribe(
          data => {
            console.log('Login successful');
            const strJSON = JSON.stringify(data);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', JSON.parse(strJSON).username);
            localStorage.setItem('userid', JSON.parse(strJSON).id);
            this.router.navigate(['home']);
            console.log(data);
            location.reload();
          },
          error => {
            this.authFail = true;
            console.log('bad credentials');
          }
        );
    }
  }


}
