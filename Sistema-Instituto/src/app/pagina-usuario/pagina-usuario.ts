import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
   standalone: true,
  selector: 'app-pagina-usuario',
  imports: [],
  templateUrl: './pagina-usuario.html',
  styleUrl: './pagina-usuario.css',
})
export class PaginaUsuario {
  constructor(
  private auth: AuthService,
  private router: Router
) {}

cerrarSesion(){

    this.auth.logout();

    this.router.navigate(['/']);

}
}
