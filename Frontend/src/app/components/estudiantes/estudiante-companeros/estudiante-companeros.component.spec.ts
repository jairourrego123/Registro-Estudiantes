import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteCompanerosComponent } from './estudiante-companeros.component';

describe('EstudianteCompanerosComponent', () => {
  let component: EstudianteCompanerosComponent;
  let fixture: ComponentFixture<EstudianteCompanerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudianteCompanerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudianteCompanerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
