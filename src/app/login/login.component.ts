import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [MaterialModule, CommonModule],
})
export class LoginComponent {

  constructor(private router: Router) {}

  USER_DATA = [
    { position: 1, email: 'lucas@softsolutions.com', senha: 1234 },
    { position: 2, email: 'rafael@softsolutions.com', senha: 1234 },
    { position: 3, email: 'caio@softsolutions.com', senha: 1234 },
  ];

  errorMessage: string | null = null;

  onLoginSubmit(event: Event) {
    event.preventDefault();
    const emailInput = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const senhaInput = (document.getElementById('inputSenha') as HTMLInputElement).value;

    const user = this.USER_DATA.find(user => user.email === emailInput && user.senha.toString() === senhaInput);

    if (user) {
      this.router.navigate(['/perfil']);
    } else {
      this.errorMessage = "Verifique seu e-mail e senha ou cadastre-se.";
    }
  }
}
