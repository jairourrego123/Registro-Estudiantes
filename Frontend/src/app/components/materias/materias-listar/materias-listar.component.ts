import { Component } from '@angular/core';
import { TablaComponent } from '../../../compartidos/tabla/tabla.component';

@Component({
  selector: 'app-materias-listar',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './materias-listar.component.html',
  styleUrl: './materias-listar.component.css'
})
export class MateriasListarComponent {
titulo = "Lista de materias"
columnas = ["id","nombre"]
filas = [
  { id: 1, nombre: 'Matemáticas' },
    { id: 2, nombre: 'Física' },
    { id: 3, nombre: 'Química' }
];
}
