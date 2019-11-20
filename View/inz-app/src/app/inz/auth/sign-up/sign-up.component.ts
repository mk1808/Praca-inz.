import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/classes';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
user: User = new User;
countries2:String[];
registerForm: FormGroup = this.fb.group({
  email: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', Validators.required],
  passwordRepeat: ['', Validators.required],
  sex: [''],
  age: [''],
  country: ['Polska'],
  city: ['']
}, 
);  


constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, 
    private auth: AuthService, private cookie: CookieService, private dictionaryService: DictionaryService,
    private notifier: NotifierService) { 
      this.dictionaryService.getCountries().subscribe(x=>{
        this.countries2=x;
        console.log(this.countries2);
      })
    }
  

  ngOnInit() {

  }

  onSignIn(){
    this.router.navigate(['/auth/signin']);
  }

  onSignUp(){
    this.user.email = this.registerForm.controls.email.value;
    this.user.name = this.registerForm.controls.username.value;
    this.user.username=this.registerForm.controls.email.value;
    this.user.role="user";
    this.user.password = this.registerForm.controls.password.value;
    this.user.age = this.registerForm.controls.age.value;
    this.user.country = this.registerForm.controls.country.value;
    this.user.city = this.registerForm.controls.city.value;


    this.auth.register(this.user).subscribe(x => {
    this.notifier.notify( 'default', 'Konto zostało założone ' );       
        },
          e => {
          
          });
   
        }
  
}
