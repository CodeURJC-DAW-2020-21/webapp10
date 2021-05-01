import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'register',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  imgLogo = "assets/images/logo.png";

  constructor(public loginService: LoginService) { }

  logIn(event: any, user: string, pass: string) {

    event.preventDefault();

    this.loginService.logIn(user, pass);
  }

  logOut() {
    this.loginService.logOut();
  }

}
