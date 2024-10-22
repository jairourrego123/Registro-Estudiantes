import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formulario-profesores',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],

  templateUrl: './formulario-profesores.component.html',
  styleUrl: './formulario-profesores.component.css'
})
export class FormularioProfesoresComponent {
  @Input() titulo!: string;
  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
   
      nombre: ['', [Validators.required, Validators.minLength(3)]],
     
  })

  onSubmit() {
    if (this.form.valid) {
      console.log('profesor creado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
