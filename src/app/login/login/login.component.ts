import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string | undefined;
  password : string | undefined;
  email = new FormControl('', [Validators.required, Validators.email])

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Entrez une adresse mail'
    }
    return this.email.hasError('email') ? 'Adresse invalide': ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
