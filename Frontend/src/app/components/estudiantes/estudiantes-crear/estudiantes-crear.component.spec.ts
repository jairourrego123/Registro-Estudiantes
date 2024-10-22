import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesCrearComponent } from './estudiantes-crear.component';

describe('EstudiantesCrearComponent', () => {
  let component: EstudiantesCrearComponent;
  let fixture: ComponentFixture<EstudiantesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiantesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
