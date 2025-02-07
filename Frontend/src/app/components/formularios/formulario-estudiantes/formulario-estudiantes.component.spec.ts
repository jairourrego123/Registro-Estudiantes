import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstudiantesComponent } from './formulario-estudiantes.component';

describe('FormularioEstudiantesComponent', () => {
  let component: FormularioEstudiantesComponent;
  let fixture: ComponentFixture<FormularioEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEstudiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
