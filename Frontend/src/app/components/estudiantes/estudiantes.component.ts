import { Component, OnInit } from '@angular/core';
import { TablaComponent } from "../../compartidos/tabla/tabla.component";

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
  columnas: string[] = ['nombre', 'edad', 'programa'];
  filas = [
    { nombre: 'Juan', edad: 22, programa: 'Ingeniería' },
    { nombre: 'María', edad: 21, programa: 'Derecho' },
    { nombre: 'Carlos', edad: 23, programa: 'Economía' }
  ];

  constructor() { }
}