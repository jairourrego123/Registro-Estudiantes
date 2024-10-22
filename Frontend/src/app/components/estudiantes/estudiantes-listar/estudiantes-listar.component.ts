import { Component } from '@angular/core';
import { TablaComponent } from "../../../compartidos/tabla/tabla.component";

@Component({
  selector: 'app-estudiantes-listar',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './estudiantes-listar.component.html',
  styleUrl: './estudiantes-listar.component.css'
})
export class EstudiantesListarComponent {
  titulo="Lista de estudiantes"
  columnas = ["id","nombre","correo"]
  filas = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana García', correo: 'ana.garcia@example.com' },
    { id: 3, nombre: 'Carlos López', correo: 'carlos.lopez@example.com' }
  ];

 
}
