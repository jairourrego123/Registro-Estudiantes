import { Component } from '@angular/core';
import { TablaComponent } from '../../../compartidos/tabla/tabla.component';

@Component({
  selector: 'app-profesores-listar',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './profesores-listar.component.html',
  styleUrl: './profesores-listar.component.css'
})
export class ProfesoresListarComponent {
  titulo="Lista de profesores"
  columnas = ["id","nombre","materia"]
  filas = [
    { id: 1, nombre: 'Profesor Gómez', materia: 'Matemáticas' },
  { id: 2, nombre: 'Profesora Martínez', materia: 'Física' },
  { id: 3, nombre: 'Profesor Ramírez', materia: 'Química' }
  ];
  
}
