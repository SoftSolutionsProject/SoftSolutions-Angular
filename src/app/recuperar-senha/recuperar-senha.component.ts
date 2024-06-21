import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {
  USER_DATA = [
    { position: 1, email: 'lucas@softsolutions.com', senha: 1234 },
    { position: 2, email: 'rafael@softsolutions.com', senha: 1234 },
    { position: 3, email: 'caio@softsolutions.com', senha: 1234 },
  ];

  email: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const user = this.USER_DATA.find(user => user.email === this.email);
    if (user) {
      this.message = "E-mail de alteração de senha enviado com sucesso";
      this.email = '';
    } else {
      this.message = "Email não cadastrado";
    }
  }
}
