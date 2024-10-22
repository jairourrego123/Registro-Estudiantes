import { Component } from '@angular/core';
import { FormularioAutocompletarComponent } from "../../formularios/formulario-autocompletar/formulario-autocompletar.component";
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-materias-docentes',
  standalone: true,
  imports: [FormularioAutocompletarComponent,MatOptionModule],
  templateUrl: './materias-docentes.component.html',
  styleUrl: './materias-docentes.component.css'
})
export class MateriasDocentesComponent {
  titulo = "Asignar un docente a una materia"
  campo1 = "Docente"
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
