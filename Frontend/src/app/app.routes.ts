import { Routes } from '@angular/router';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { MateriasEstudiantesComponent } from './components/materias-estudiantes/materias-estudiantes.component';
import { MateriasDocentesComponent } from './components/materias-docentes/materias-docentes.component';

export const routes: Routes = [
{ path: 'estudiantes', component: EstudiantesComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'materias/estudiantes', component: MateriasEstudiantesComponent },
  { path: 'materias/docentes', component: MateriasDocentesComponent },
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/estudiantes' } 
];
