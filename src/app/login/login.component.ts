import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  USER_DATA = [
    { position: 1, email: 'lucas@softsolutions.com', senha: 10079 },
    { position: 2, email: 'rafael@softsolutions.com', senha: 10079 },
    { position: 3, email: 'caio@softsolutions.com', senha: 10079 },
  ];

  onLoginSubmit(event: Event) {
    event.preventDefault();
    const emailInput = (document.getElementById('inputEmail') as HTMLInputElement).value;
    
    const userExists = this.USER_DATA.some(user => user.email === emailInput);

    if (userExists) {
      this.router.navigate(['/perfil']);
    } else {
      this.router.navigate(['/cadastro']);
    }
  }
}
