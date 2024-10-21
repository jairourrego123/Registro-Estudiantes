import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  // Arreglo para columnas dinámicas
  displayedColumns: string[] = [];
  
  // Fuente de datos para la tabla
  dataSource = new MatTableDataSource<any>();

  // Datos de ejemplo
  columnas: string[] = ['id', 'name', 'grade'];
  filas: any[] = [
    { id: 1, name: 'John Doe', grade: 8.5 },
    { id: 2, name: 'Jane Doe', grade: 9.0 },
    { id: 3, name: 'Sam Smith', grade: 7.8 },
    { id: 4, name: 'Chris Evans', grade: 6.8 }
  ];

  ngOnInit(): void {
    // Asignamos las columnas y los datos a las propiedades correspondientes
    this.displayedColumns = this.columnas;
    this.dataSource.data = this.filas;
  }
}
