import { Component } from '@angular/core';
import { FormularioMateriasComponent } from '../../formularios/formulario-materias/formulario-materias.component';

@Component({
  selector: 'app-materias-crear',
  standalone: true,
  imports: [FormularioMateriasComponent],
  templateUrl: './materias-crear.component.html',
  styleUrl: './materias-crear.component.css'
})
export class MateriasCrearComponent {
  titulo="Crear materia"

}
