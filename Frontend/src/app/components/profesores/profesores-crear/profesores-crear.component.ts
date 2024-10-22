import { Component } from '@angular/core';
import { FormularioProfesoresComponent } from "../../formularios/formulario-profesores/formulario-profesores.component";

@Component({
  selector: 'app-profesores-crear',
  standalone: true,
  imports: [FormularioProfesoresComponent],
  templateUrl: './profesores-crear.component.html',
  styleUrl: './profesores-crear.component.css'
})
export class ProfesoresCrearComponent {
titulo = "Crear Profesor"
}
