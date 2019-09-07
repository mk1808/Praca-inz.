import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loginData: User=new User;
  token;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private auth: AuthService, private cookie: CookieService) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit() {

  }

  onSignUp() {

    this.router.navigate(['/auth/signup']);
  }

  onConfirm() {
    this.loginData.login=this.loginForm.controls.login.value;
    this.loginData.password = this.loginForm.controls.password.value;
    this.auth.logIn(this.loginData).subscribe(x => {
      this.token = x.accessToken;
      console.log(x);
      console.log(this.token)
    })

  }
}
