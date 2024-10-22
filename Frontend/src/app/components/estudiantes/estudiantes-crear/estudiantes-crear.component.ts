
import { Component } from '@angular/core';
import { FormularioEstudiantesComponent } from "../../formularios/formulario-estudiantes/formulario-estudiantes.component";

@Component({
  selector: 'app-estudiantes-crear',
  standalone: true,
  imports: [FormularioEstudiantesComponent],

  templateUrl: './estudiantes-crear.component.html',
  styleUrl: './estudiantes-crear.component.css'
})
export class EstudiantesCrearComponent  {
titulo="Crear Estudiante"

}
