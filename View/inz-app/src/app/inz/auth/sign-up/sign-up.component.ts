import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/classes';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
user: User = new User;
countries:any[]=["Afganistan","Albania","Algieria","Andora","Angola","Anguilla","Antarktyda","Antigua i Barbuda",
"Arabia Saudyjska","Argentyna","Armenia","Aruba","Australia","Austria","Azerbejdżan","Bahamy","Bahrajn","Bangladesz",
"Barbados","Belgia","Belize","Benin","Bermudy","Bhutan","Białoruś","Boliwia","Bonaire, Sint Eustatius i Saba","Bośnia i Hercegowina",
"Botswana","Brazylia","Brunei Darussalam","Bułgaria","Burkina Faso","Burundi","Ceuta","Chile","Chiny",
"Curaçao","Chorwacja","Cypr","Czad","Czarnogóra","Dania","Dominika","Dominikana","Dżibuti","Egipt","Ekwador","Erytrea",
"Estonia","Etiopia","Falklandy","Fidżi Republika","Filipiny","Finlandia","Francuskie Terytorium Płd","Francja","Gabon","Gambia",
"Ghana","Gibraltar","Grecja","Grenada","Grenlandia","Gruzja","Guam","Gujana","Gwatemala","Gwinea","Gwinea Równikowa","Gwinea-Bissau","Haiti",
"Hiszpania","Honduras","Hongkong","Indie","Indonezja","Irak","Iran","Irlandia","Islandia","Izrael","Jamajka","Japonia","Jemen","Jordania","Kajmany",
"Kambodża","Kamerun","Kanada","Katar","Kazachstan","Kenia","Kirgistan","Kiribati","Kolumbia","Komory","Kongo",
"Koreańska Republika","Kosowo","Kostaryka","Kuba","Kuwejt","Laos","Lesotho","Liban","Liberia",
"Libia","Liechtenstein","Litwa","Luksemburg","Łotwa","Macedonia","Madagaskar","Majotta","Makau","Malawi","Malediwy",
"Malezja","Mali","Malta","Mariany Północne","Maroko","Mauretania","Mauritius","Meksyk","Melilla","Mikronezja","Minor",
"Mołdawia","Mongolia","Montserrat","Mozambik","Myanmar ","Namibia","Nauru","Nepal","Niderlandy","Niemcy","Niger",
"Nigeria","Nikaragua","Niue","Norfolk","Norwegia","Nowa Kaledonia","Nowa Zelandia","Okupowane Terytorium Palestyny","Oman",
"Pakistan","Palau","Panama","Papua Nowa Gwinea","Paragwaj","Peru","Pitcairn","Polinezja Francuska","Portugalia","Republika Czeska","Republika Korei","Rep.Połud.Afryki","Rep.Środkowoafryańska","Rosja","Rwanda","Sahara Zachodnia",
"Saint Barthelemy","Rumunia","Salwador","Samoa","Samoa Amerykańskie","San Marino","Senegal","Serbia","Seszele","Sierra Leone",
"Singapur","Suazi","Słowacja","Słowenia","Somalia","Sri Lanka","St. Pierre i Miquelon","St.Kitts i Nevis","St.Lucia",
"St.Vincent i Grenadyny","Stany Zjedn. Ameryki","Sudan","Sudan Południowy","Surinam","Syria","Szwajcaria","Szwecja",
"Święta Helena","Tadżykistan","Tajlandia","Tajwan","Tanzania","Togo","Tokelau","Tonga","Trynidad i Tobago","Tunezja",
"Turcja","Turkmenistan","Wyspy Turks i Caicos","Tuvalu","Uganda","Ukraina","Urugwaj","Uzbekistan","Vanuatu","Wallis i Futuna","Watykan",
"Wenezuela","Węgry","Wielka Brytania","Wietnam","Włochy","Wschodni Timor","Wyb.Kości Słoniowej","Wyspa Bouveta","Wyspa Bożego Narodzenia","Wyspy Cooka","Wyspy Dziewicze-USA",
"Wyspy Dziewicze-W.B","Wyspy Heard i McDonald","Wyspy Kokosowe ","Wyspy Owcze","Wyspy Marshalla","Wyspy Salomona","Wyspa Sint Maarten","Wyspy Św.Tomasza i Książęca","Zambia","Zielony Przylądek","Zimbabwe",
"Zjedn.Emiraty Arabskie"];
registerForm: FormGroup = this.fb.group({
  email: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', Validators.required],
  passwordRepeat: ['', Validators.required],
  sex: [''],
  age: [''],
  country: [''],
  city: ['']
}, 
);  


constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, 
    private auth: AuthService, private cookie: CookieService) { }
  

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
          console.log("yay")        
        },
          e => {
          
          });
   
        }
  
}
