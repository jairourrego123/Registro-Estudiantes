import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-formulario-estudiantes',
  standalone: true,
 imports: [CommonModule,MatIconModule,MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-estudiantes.component.html',
  styleUrl: './formulario-estudiantes.component.css'
})
export class FormularioEstudiantesComponent {

  @Input() titulo!: string;
  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
   
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]]

  })

  onSubmit() {
    if (this.form.valid) {
      console.log('Estudiante creado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
