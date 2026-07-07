import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
   standalone: true,
  selector: 'app-pagina-admin',
  imports: [],
  templateUrl: './pagina-admin.html',
  styleUrl: './pagina-admin.css',
})
export class PaginaAdmin {
    constructor(
  private auth: AuthService,
  private router: Router
) {}

cerrarSesion(){

    this.auth.logout();

    this.router.navigate(['/']);

}
}
