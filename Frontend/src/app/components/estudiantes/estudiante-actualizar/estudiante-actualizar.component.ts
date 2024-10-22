import { Component } from '@angular/core';
import { FormularioEstudiantesComponent } from '../../formularios/formulario-estudiantes/formulario-estudiantes.component';

@Component({
  selector: 'app-estudiante-actualizar',
  standalone: true,
  imports: [FormularioEstudiantesComponent],
  templateUrl: './estudiante-actualizar.component.html',
  styleUrl: './estudiante-actualizar.component.css'
})
export class EstudianteActualizarComponent {
  titulo="Actualizar Estudiante"
}
