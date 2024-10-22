import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDocentesComponent } from './materias-docentes.component';

describe('MateriasDocentesComponent', () => {
  let component: MateriasDocentesComponent;
  let fixture: ComponentFixture<MateriasDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriasDocentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriasDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
