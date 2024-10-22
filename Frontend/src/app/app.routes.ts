import { Routes } from '@angular/router';

import { MateriasDocentesComponent } from './components/materias/materias-docentes/materias-docentes.component';
import { EstudiantesListarComponent } from './components/estudiantes/estudiantes-listar/estudiantes-listar.component';
import { ProfesoresListarComponent } from './components/profesores/profesores-listar/profesores-listar.component';
import { MateriasListarComponent } from './components/materias/materias-listar/materias-listar.component';
import { EstudiantesCrearComponent } from './components/estudiantes/estudiantes-crear/estudiantes-crear.component';
import { EstudianteActualizarComponent } from './components/estudiantes/estudiante-actualizar/estudiante-actualizar.component';
import { MateriasCrearComponent } from './components/materias/materias-crear/materias-crear.component';
import { ProfesoresCrearComponent } from './components/profesores/profesores-crear/profesores-crear.component';
import { MateriasEstudiantesComponent } from './components/materias/materias-estudiantes/materias-estudiantes.component';
import { EstudianteCompanerosComponent } from './components/estudiantes/estudiante-companeros/estudiante-companeros.component';

export const routes: Routes = [
{ path: 'estudiantes', component: EstudiantesListarComponent },
{ path: 'estudiantes/listar', component: EstudiantesListarComponent },
{ path: 'estudiantes/crear', component: EstudiantesCrearComponent },
{ path: 'estudiantes/editar', component: EstudianteActualizarComponent },
{ path: 'profesores', component: ProfesoresListarComponent },
{ path: 'profesores/listar', component: ProfesoresListarComponent },
{ path: 'profesores/crear', component: ProfesoresCrearComponent },
{ path: 'materias/listar', component: MateriasListarComponent },
{ path: 'materias/crear', component: MateriasCrearComponent },
  { path: 'materias/asignar/docente', component: MateriasDocentesComponent },
  { path: 'materias/asignar/estudiante', component: MateriasEstudiantesComponent },
  { path: 'materias/listar/companeros', component: EstudianteCompanerosComponent },
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/estudiantes' } 
];
