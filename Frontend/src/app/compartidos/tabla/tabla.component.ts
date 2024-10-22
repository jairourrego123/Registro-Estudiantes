import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() columnas: string[] = [];
  @Input() filas: any[] = [];

  @Input() titulo!: string;
}
