import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
