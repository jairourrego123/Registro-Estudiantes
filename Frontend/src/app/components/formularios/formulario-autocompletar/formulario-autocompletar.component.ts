import { CommonModule } from '@angular/common';
import { Component, inject, input, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, startWith } from 'rxjs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-autocompletar',
  standalone: true,
  imports: [MatOptionModule,MatAutocompleteModule,MatIconModule,CommonModule,
    MatSelectModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatButtonModule,RouterLink],
  templateUrl: './formulario-autocompletar.component.html',
  styleUrl: './formulario-autocompletar.component.css'
})
export class FormularioAutocompletarComponent implements OnInit {

  @Input() titulo!: string;
  @Input() campo1! : string;
  @Input() campo2! : string;
  @Input() 
  opcionesCampo1!: { id: number, nombre: string }[]
  @Input()
  opcionesCampo2: { id: number, nombre: string }[] = [
  ];

  filteredOptionsCampo1!: Observable<{ id: number, nombre: string }[]>;
  filteredOptionsCampo2!: Observable<{ id: number, nombre: string }[]>;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      campo1: ['', Validators.required],
      campo2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Filtrado de opciones para Campo 1
    this.filteredOptionsCampo1 = this.form.get('campo1')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.opcionesCampo1))
    );

    // Filtrado de opciones para Campo 2
    this.filteredOptionsCampo2 = this.form.get('campo2')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.opcionesCampo2))
    );
  }

  private _filter(value: string, options: { id: number, nombre: string }[]): { id: number, nombre: string }[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    }
  }
}