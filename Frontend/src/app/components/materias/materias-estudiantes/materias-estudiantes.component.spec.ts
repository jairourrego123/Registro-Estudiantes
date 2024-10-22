import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasEstudiantesComponent } from './materias-estudiantes.component';

describe('MateriasEstudiantesComponent', () => {
  let component: MateriasEstudiantesComponent;
  let fixture: ComponentFixture<MateriasEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriasEstudiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriasEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
