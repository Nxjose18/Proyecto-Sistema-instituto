import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
   standalone: true,
  selector: 'app-pagina-admin',
  imports: [MatIconModule,CommonModule],
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

 opcionSeleccionada: string = 'cursos'; 

  // Función para cambiar la pestaña activa
  seleccionar(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
}
