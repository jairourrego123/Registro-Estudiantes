import { Component } from '@angular/core';
import { FormularioAutocompletarComponent } from "../../formularios/formulario-autocompletar/formulario-autocompletar.component";
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-materias-estudiantes',
  standalone: true,
  imports: [FormularioAutocompletarComponent,MatOptionModule],
  templateUrl: './materias-estudiantes.component.html',
  styleUrl: './materias-estudiantes.component.css'
})
export class MateriasEstudiantesComponent {
  titulo = "Inscribir un estudiante a un curso"
  campo1 = "Estudiante"
  campo2 = "Materia"
  opcionesCampo1 =  [
    { id: 1, nombre: 'Jairo' },
    { id: 2, nombre: 'Miller' },
    { id: 3, nombre: 'Urrego' }
  ];
  opcionesCampo2 = 
  [
    { id: 1, nombre: 'Español' },
    { id: 2, nombre: 'Sociales' },
    { id: 3, nombre: 'Matematica' }
  ];
}
