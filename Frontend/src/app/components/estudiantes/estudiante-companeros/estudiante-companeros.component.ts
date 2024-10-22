import { Component } from '@angular/core';
import { TablaComponent } from '../../../compartidos/tabla/tabla.component';

@Component({
  selector: 'app-estudiante-companeros',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './estudiante-companeros.component.html',
  styleUrl: './estudiante-companeros.component.css'
})
export class EstudianteCompanerosComponent {
  titulo="Lista de compañeros de cursos"
  columnas = ["nombre"]
  filas = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana García', correo: 'ana.garcia@example.com' },
    { id: 3, nombre: 'Carlos López', correo: 'carlos.lopez@example.com' }
  ];

}
