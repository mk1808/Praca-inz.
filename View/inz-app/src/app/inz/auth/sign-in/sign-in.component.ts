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
  user:User;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private auth: AuthService) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit() { }

  onSignUp() {

    this.router.navigate(['/auth/signup']);
  }

  onConfirm() {
    this.loginData.login=this.loginForm.controls.login.value;
    this.loginData.password = this.loginForm.controls.password.value;
    this.auth.logIn(this.loginData).subscribe(x => {
      this.token = x.accessToken;
      this.user = x.user;
      console.log(x);
      console.log(this.token);
      this.auth.changeStatus(true);
      this.auth.saveCookie("token", this.token);
      this.auth.saveCookie("user", JSON.stringify(this.user));
      this.router.navigate(['/trip/all']);
    })

  }
}
